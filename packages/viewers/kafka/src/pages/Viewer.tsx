import React from "react";
import axios from "axios";
import env from "@beam-australia/react-env";
import { Block } from "baseui/block";
import Cookies from "js-cookie";
import { Spinner } from "baseui/spinner";
import { Metrics } from "@dakan/ui";

import exampleKafkaJson from "../resources/exampleKafka.json";
import exampleTopicFieldJson from "../resources/exampleTopicField.json";
import exampleTags from "../resources/exampleTags.json";
import Content from "../components/Content";
import HandleAxiosError from "../utils/HandleAxiosError";
import exampleComments from "../resources/exampleComments.json";
import TopicNotFound from "../components/TopicNotFound";

const server = env("SERVER");
const amplitude_project_id = env("AMPLITUDE_PROJECT_ID");
const amplitude_endpoint = env("AMPLITUDE_ENDPOINT");
const gt = env("GTM_ID");

const Viewer = (props: any) => {
  const [data, setData] = React.useState<any>();
  const [fields, setFields] = React.useState({});
  const [error, setError] = React.useState();
  const [tagOptions, setTagOptions] = React.useState([{}]);
  const [numberOfFields, setNumberOfFields] = React.useState(0);
  const [showSpinner, setShowSpinner] = React.useState(true);
  const [clientUser, setClientUser] = React.useState({});
  const [comments, setComments] = React.useState([{}]);

  const handleGetCommentsResponse = (response: any) => {
    if (typeof response.data === "object" && response.data !== null) {
      const commentList = [...response.data].sort((a, b) => {
        if (
          a.properties.date + "t" + a.properties.time <
          b.properties.date + "t" + b.properties.time
        ) {
          return 1;
        }
        if (
          a.properties.date + "t" + a.properties.time >
          b.properties.date + "t" + b.properties.time
        ) {
          return -1;
        }
        return 0;
      });
      setComments(commentList);
    } else {
      setError(response);
    }
  };

  const handleGetTopicFields = (response: any) => {
    if (typeof response.data === "object" && response.data !== null) {
      setFields(response.data);
      setNumberOfFields(response.data.length);
      setShowSpinner(false);
    } else {
      setError(response);
      setShowSpinner(false);
    }
  };

  const handleResponse = (response: any) => {
    if (typeof response.data === "object" && response.data !== null) {
      setData(response.data);
      if (response.data.id) {
        axios
          .get(`${server}/node/out/${response.data.id}/hasMember`)
          .then(handleGetTopicFields)
          .catch((e) => HandleAxiosError(e, setError));

        axios
          .get(`${server}/node/out/${response.data.id}/hasComment`)
          .then(handleGetCommentsResponse)
          .catch((e) => HandleAxiosError(e, setError));
      }
    } else {
      setError(response);
    }
  };

  const handleGetInformationTypeResponse = async (response: any) => {
    if (typeof response.data === "object" && response.data !== null) {
      setTagOptions(response.data);
    } else {
      setError(response);
    }
  };

  const getAzureAuth = () => {
    const tokenId = Cookies.get("ClientToken");
    const clientUser = Cookies.get("ClientUser");
    if (tokenId && clientUser) {
      setClientUser(
        JSON.parse(clientUser.replace(/\\054/g, ",").replace(/\\"/g, '"'))
      );
    }
  };

  React.useEffect(() => {
    if (props.match.params.id === "test") {
      setData(exampleKafkaJson);
      setComments(exampleComments);
      setFields(exampleTopicFieldJson);
      setTagOptions(exampleTags);
      setNumberOfFields(exampleTopicFieldJson.length);
      setShowSpinner(false);
      getAzureAuth();
    } else {
      axios
        .get(`${server}/node/${props.match.params.id}`)
        .then(handleResponse)
        .catch((e) => {
          HandleAxiosError(e, setError);
          setShowSpinner(false);
        });
      axios
        .get(`${server}/nodes/opplysningstype`)
        .then(handleGetInformationTypeResponse)
        .catch((e) => HandleAxiosError(e, setError));
      getAzureAuth();
    }
  }, [props.match.params.id, handleResponse]);

  if (showSpinner) {
    return (
      <Block display="flex" justifyContent="center">
        <Spinner size={96} />
      </Block>
    );
  }

  if (error && !Object.keys(data).length) {
    return <TopicNotFound error={error} />;
  }

  return (
    <React.Fragment>
      {data && data.properties && (
        <Block>
          <Metrics
            gt={gt}
            amplitude_project_id={amplitude_project_id}
            amplitude_endpoint={amplitude_endpoint}
            viewer={"kafka"}
            page={data.properties.topic_name}
            section={""}
          />
          <Content
            data={data}
            fields={fields}
            tagOptions={tagOptions}
            numberOfFields={numberOfFields}
            comments={comments}
            setComments={setComments}
            clientUser={clientUser}
          />
        </Block>
      )}
    </React.Fragment>
  );
};

export default Viewer;
