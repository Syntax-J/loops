onChange(){
    var file = this.$.input.files[0];
    var r = new FileReader();  
    let that =this;
    r.onload = function(){
      that.$.img.src=r.result
      that._bigImg.src = r.result;
      that.$.img.style.display = 'block';
    }
    r.readAsDataURL(file);
  }
