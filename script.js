window.onload = () => {
    render();
  };
  
  const models = [
    {
      url: './assets/magnemite/scene.gltf',
      scale: '0.06 0.06 0.06',
      rotation: '0 225 0'
    },
//     {
//       url: './assets/articuno/scene.gltf',
//       scale: '0.2 0.2 0.2',
//       rotation: '0 225 0'
//     },
//     {
//       url: './assets/dragonite/scene.gltf',
//       scale: '0.08 0.08 0.08',
//       rotation: '0 225 0'
//     },
 ];
  
  let modelIndex = 0;
  const setModel = (model, entity) => {
    if (model.scale) {
      entity.setAttribute('scale', model.scale);
    }
  
    if (model.rotation) {
      entity.setAttribute('rotation', model.rotation);
    }
  
    if (model.position) {
      entity.setAttribute('position', model.position);
    }
  
    entity.setAttribute('gltf-model', model.url);
  };
  
  function render() {
    const scene = document.querySelector('a-scene');
  
    navigator.geolocation.getCurrentPosition(function (position) {
       model.setAttribute('animation-mixer', '');
      const model = document.createElement('a-entity');
      
      setModel(models[modelIndex], model);
  

  
      document.querySelector('button[data-action="change"]').addEventListener('click', function () {
      
        modelIndex++;
        const newIndex = modelIndex % models.length;
        setModel(models[newIndex], entity);
      });
  
      scene.appendChild(model);
    });
  }
