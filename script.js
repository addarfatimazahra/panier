const quantityControls = document.querySelectorAll('.quantity-control');

for(const control of quantityControls) {
    const ajouterElement = control.querySelector('.fas.fa-plus-circle');
    const quantiteElement = control.querySelector('.quantity');
    const deliminerElement = control.querySelector('.fas.fa-minus-circle');
    const deleteButton = control.parentElement.querySelector('.fas.fa-trash-alt');
    
    
    let quantite = 0;

    ajouterElement.addEventListener('click', () => {
        quantite++;
        quantiteElement.textContent = quantite;
        somme();
       
    });

    deliminerElement.addEventListener('click', () => {
        if (quantite > 0) {
            quantite--;
            quantiteElement.textContent = quantite;
            somme();
        }
       
        
    });
  
    
    deleteButton.addEventListener('click', () => {
        control.closest('.card').remove(); 
        somme();
    });
    
    function somme() {
        const totalElement = document.querySelector('.total'); 
        let total = 0;
        
        document.querySelectorAll('.card-body').forEach(card => {
            const prix = parseFloat(card.querySelector('.unit-price').textContent);
            const quantite = parseInt(card.querySelector('.quantity').textContent); 
            total += prix * quantite;
        });
        
        totalElement.textContent = total + ' $'; 
    }
    document.querySelectorAll('.like-button').forEach(button => {
        button.addEventListener('click', () => {
            if (button.style.color === 'red') {
                button.style.color = 'gray'; // Revert to gray if already liked
            } else {
                button.style.color = 'red'; // Change to red when liked
            }
        });
    });
    

    

}


  

