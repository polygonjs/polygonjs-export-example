import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1729538293539",
  root: "1675552563896",
  nodes: {
    geo1: "1729538293539",
    "geo1/MAT": "1675552563896",
    ground: "1729538293539",
    "ground/MAT": "1675552563896",
    "ground/MAT/meshStandardBuilder1": "1729538293539",
    COP: "1675552563896",
    lights: "1729538293539",
    cameras: "1729538293539",
    "cameras/cameraControls1": "1675552563896",
  },
  shaders: {
    "/ground/MAT/meshStandardBuilder1": {
      vertex: "1729538293539",
      fragment: "1729538293539",
      "customDepthMaterial.vertex": "1729538293539",
      "customDepthMaterial.fragment": "1729538293539",
      "customDistanceMaterial.vertex": "1729538293539",
      "customDistanceMaterial.fragment": "1729538293539",
      "customDepthDOFMaterial.vertex": "1729538293539",
      "customDepthDOFMaterial.fragment": "1729538293539",
    },
  },
  jsFunctionBodies: {},
};

export const loadSceneData_scene_01 = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "scene_01",
    urlPrefix: sceneDataRoot + "/scene_01",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
