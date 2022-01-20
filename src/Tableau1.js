class Tableau1 extends Phaser.Scene{
    preload(){
        this.load.image('carre', 'assets/carre.png');
        this.load.image('cercle', 'assets/cercle.png');
    }
    create() {

        let me=this;

        this.largeur=1000;
        this.hauteur=500;

        this.balle=this.physics.add.image(this.largeur/2,this.hauteur/2,'cercle')
        this.balle.setDisplaySize(20,20)
        this.balle.body.setBounce(1.1,1.1)
        this.balle.setVelocityY(0)
        this.balle.setMaxVelocity(200)



        this.haut=this.physics.add.image(0,0,'carre').setOrigin(0,0);
        this.haut.setDisplaySize(this.largeur,20)
        this.haut.body.setAllowGravity(false)
        this.haut.setImmovable(true)


        this.bas=this.physics.add.image(0,this.hauteur-20,'carre').setOrigin(0,0);
        this.bas.setDisplaySize(this.largeur,20)
        this.bas.body.setAllowGravity(false)
        this.bas.setImmovable(true)


        this.gauche=this.physics.add.image(30,200,'carre').setOrigin(0,0);
        this.gauche.setDisplaySize(20,100)
        this.gauche.body.setAllowGravity(false)
        this.gauche.setImmovable(true)


        this.droite=this.physics.add.image(950,200,'carre').setOrigin(0,0);
        this.droite.setDisplaySize(20,100)
        this.droite.body.setAllowGravity(false)
        this.droite.setImmovable(true)


        this.physics.add.collider(this.balle,this.bas)
        this.physics.add.collider(this.balle,this.haut)
        this.physics.add.collider(this.balle,this.gauche, function(){
            me.rebond(me.gauche)
        })
        this.physics.add.collider(this.balle,this.droite, function(){
            console.log("touche droite");
            me.rebond(me.droite)
        })
        this.Initiale();
        this.joueurGauche = new Joueur('Robert','joueurGauche')
        this.joueurDroite = new Joueur('Jean marie','joueurDroite')
        console.log(this.joueurGauche)

        this.initKeyboard()

    }

    rebond(raquette){
        let me=this;

        console.log(raquette.y)
        console.log(me.balle.y)
        console.log((me.balle.y)-(raquette.y))

        let hauteurRaquette=raquette.displayHeight;

        let positionRelativeRaquette =(this.balle.y-raquette.y);

        positionRelativeRaquette =(positionRelativeRaquette/hauteurRaquette);

        positionRelativeRaquette= positionRelativeRaquette*2-1;
        console.log(positionRelativeRaquette);

        this.balle.setVelocityY(this.balle.body.velocity.y + positionRelativeRaquette * hauteurRaquette)
    }

    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.gauche.setVelocityY(-100)
                    break;

                case Phaser.Input.Keyboard.KeyCodes.X:
                    me.gauche.setVelocityY(100)
                    break;

                case Phaser.Input.Keyboard.KeyCodes.J:
                    me.droite.setVelocityY(-100)
                    break;

                case Phaser.Input.Keyboard.KeyCodes.N:
                    me.droite.setVelocityY(100)
                    break;


            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.gauche.setVelocityY(0)
                    break
                case Phaser.Input.Keyboard.KeyCodes.X:
                    me.gauche.setVelocityY(0)
                    break
                case Phaser.Input.Keyboard.KeyCodes.J:
                    me.droite.setVelocityY(0)
                    break
                case Phaser.Input.Keyboard.KeyCodes.N:
                    me.droite.setVelocityY(0)
                    break

            }
        });
    }
    win(joueur){
        //alert('Joueur '+joueur.name+' gagne')
        joueur.score ++;
        //alert('Le score est de '+this.joueurGauche.score+' a '+this.joueurDroite.score)
        this.Initiale();
    }


    Initiale (){
        this.balle.setX(this.largeur/2);
        this.balle.setY(this.hauteur/2);
        this.gauche.setY(this.hauteur/2-50);
        this.droite.setY(this.hauteur/2-50);


        let pourcent = Phaser.Math.Between(0, 100)

        if (pourcent >= 50){
            this.balle.setVelocityX(200);
        }
        if (pourcent < 50){
            this.balle.setVelocityX(-200);
        }

        this.balle.setVelocityY(0);

    }
    update(){
        if(this.balle.x>this.largeur){
            this.win(this.joueurGauche);
        }
        if(this.balle.x<0){
            this.win(this.joueurDroite);
        }

        if(this.balle.x > this.largeur){
            this.Initiale();
            this.gauche.setY(200)
            this.droite.setY(200)

        }

        if(this.balle.x < 0) {
            this.Initiale();
            this.gauche.setY(200)
            this.droite.setY(200)

        }

        if (this.balle.x > this.largeur){
            this.balle.x=500;
        }

        if (this.balle.y > this.hauteur){
            this.balle.y=this.hauteur;
        }

    }
}