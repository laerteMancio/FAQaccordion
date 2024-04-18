const exibeConteudo = (pos, e)=>{     
      
    if (e.code !== 'Tab') {
      if (document.getElementById('icone-' + pos).src.endsWith('icon-plus.svg') ) {        
      document.getElementById('icone-' + pos).src = './assets/images/icon-minus.svg';
      document.getElementById('conteudo-' + pos).classList.remove('sumir-display');      
    } else {    
      document.getElementById('icone-' + pos).src = './assets/images/icon-plus.svg';
      document.getElementById('conteudo-' + pos).classList.add('sumir-display');
    }    
    }
  }