import * as React from "react";
import { Block } from "baseui/block";
import { LabelMedium } from "baseui/typography";
import { SelectOpplysningstype } from "@dakan/ui";
import env from "@beam-australia/react-env";
import axios from "axios";

import GetValue from "../utils/GetValue";

const server = env("SERVER");

const FieldViewer = (props: any): JSX.Element => {
  const { field, tagOptions, clientUser } = props;

  const [fieldTags, setFieldTags] = React.useState([]);

  const handleGetTagResponse = (response: any) => {
    if (typeof response.data === "object" && response.data !== null) {
      setFieldTags(response.data);
    } else {
      console.log(response);
    }
  };

  React.useEffect(() => {
    axios
      .get(`${server}/node/out/${field.id}/hasTag`)
      .then(handleGetTagResponse)
      .catch((e) => console.log(e));
  }, [field.id]);

  return (
    <React.Fragment>
      <Block marginBottom="scale1200">
        {field.properties && (
          <Block>
            <Block>
              <LabelMedium>
                {GetValue(() => field.properties.field_name)}
              </LabelMedium>
            </Block>
            <Block display={["block", "flex"]} marginBottom="scale300">
              <Block flex="1">
                <Block flex="1" marginTop="scale600" marginBottom="scale600">
                  <SelectOpplysningstype
                    dataId={field.id}
                    tagOptions={tagOptions}
                    serverUrl={server}
                    columnTags={fieldTags}
                    setColumnTags={setFieldTags}
                    clientUser={clientUser}
                  />
                </Block>
              </Block>
            </Block>
          </Block>
        )}
      </Block>
    </React.Fragment>
  );
};

export default FieldViewer;
