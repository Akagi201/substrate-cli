import { ApiPromise, WsProvider } from "@polkadot/api";

async function main() {
  const wsProvider = new WsProvider('ws://localhost:9944');
  const api = await ApiPromise.create({provider: wsProvider});
  console.log("api genesis hash %s", api.genesisHash.toHex());
  console.log("api library info %s", api.libraryInfo);
  console.log("api runtime version:");
  console.log(api.runtimeVersion);
  console.log("api runtime metadata:");
  console.dir(JSON.parse(api.runtimeMetadata.toString()), {depth: null, colors:true});
}

main().then(() => {
  console.log("success");
  process.exit(0);
}).catch(err => {
  console.error("failed, err:", err);
  process.exit(1);
})
