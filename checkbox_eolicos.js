function CheckboxPqsEolicos(tocControlDiv, tocControl) {
	//Cria uma div para a camada parques eólicos
    var pqsEolicosStuffDiv = document.createElement('div');
    
    //Cria checkbox para parques eólicos
    var pqsEolicosCheckButton = document.createElement('input');
    pqsEolicosCheckButton.type = 'checkbox';
    pqsEolicosCheckButton.name = 'BaseMaps';
    pqsEolicosCheckButton.id = 'pqsEolicos';
    pqsEolicosCheckButton.checked = false;
    
    //Texto do checkbox
    var pqsEolicosLabel = document.createElement('label');
    pqsEolicosLabel.htmlFor = pqsEolicosCheckButton.id;
    pqsEolicosLabel.appendChild(document.createTextNode('Parques Eólicos'));
    
    //Adiciona o checkbox e o texto na div de pqs eólicos
    pqsEolicosStuffDiv.appendChild(pqsEolicosCheckButton);
    pqsEolicosStuffDiv.appendChild(pqsEolicosLabel);

    //Põe a div de pqs eólicos na div do controle
    tocControlDiv.appendChild(pqsEolicosStuffDiv);
    
    //Adiciona um listener para o click no checkbox
    google.maps.event.addDomListener(pqsEolicosCheckButton, 'click', function() {
      //Toggle Roadmap Layer on and off
      if (pqsEolicosCheckButton.checked) 
      {
        tocControl.setActiveBasemap(parseParquesEolicosJSON());
      }else{
        tocControl.setActiveBasemap(removeMarkers());
      }
    });
}