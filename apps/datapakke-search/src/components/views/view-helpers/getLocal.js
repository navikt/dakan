export function getLocal(label) {
  if (label === 'datapackage') return 'Datapakke'
  if (label === 'api' || label === 'API') return 'API'
  if (label === 'begrep') return 'Begrep'
  if (label === 'godkjent_begrep') return 'Godkjent begrep'
  if (label === 'purpose') return 'Formål'
  if (label === 'pii-type') return 'Opplysningstype'
  if (label === 'opplysningstype') return 'Opplysningstype'
  if (label === 'kafka') return 'Datastrøm'
  if (label === 'tabell') return 'Tabell'
  if (label === 'kafka_topic') return 'Kafka'
  if (label === 'kafka_aiven_topic' || label === 'kafka_topic_aiven') return 'Kafka Aiven'
  if (label === 'tableau') return 'Tableau'
  if (label === 'person') return 'Person'
  if (label === 'NaisApp') return 'Nais App'
  if (label === 'NaisTeam') return 'Nais Team'
  if (label === 'office') return 'Kontor'
  if (label === 'ProductArea') return 'Produktområde'
  if (label === 'team') return 'Team'

  return label
}
