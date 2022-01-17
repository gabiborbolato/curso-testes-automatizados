const { CloudantV1 } = require('@ibm-cloud/cloudant');
const client = CloudantV1.newInstance();

reports = async (req, res) => {

  try {
  const dbName = 'documents';
  const getDocParams = { db: dbName, docId: req.query.id };
  const documents = await client.getDocument(getDocParams);
  const { result } = documents;

  console.log(
    `Document retrieved from database:\n${JSON.stringify(result, null, 2)}`
  );
    res.json(documents);
  } catch (error) {
    res.status(500).send();
  }
};

module.exports = reports;