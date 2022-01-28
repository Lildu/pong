class Tableau1 extends Phaser.Scene{

    preload(){
        this.load.image('carre', 'assets/carre.png');
        this.load.image('carre1', 'assets/carre1.png');
        this.load.image('carre2', 'assets/carre2.png');
        this.load.image('cercle', 'assets/cercle.png');
        this.load.image('cercle1', 'assets/cercle1.png');
        for(let t=1;t<=11;t++){
            this.load.image('leaf'+t, 'assets/leaf/leaf'+t+'.png');
        }

        for(let i=1;i<=300;i++){
            this.load.image('sea'+i, 'assets/sea/sea'+i+'.jpg');
        }
        this.load.image('leafemit','assets/particles/leafemit.png');

        this.load.audio('son','assets/audio/seasound.mp3');
        this.load.audio('son1','assets/audio/son1.mp3');
        this.load.audio('son2','assets/audio/son2.mp3');


    }

    create() {


        let me=this;
        /**let dir=1;**/

        this.son=this.sound.add('son',{loop: true});
        this.soun1=this.sound.add('son1',{loop: false});
        this.soun2=this.sound.add('son2',{loop: false});
        this.son.volume=0.03;
        this.soun1.volume=0.1;
        this.soun2.volume=0.1;
        this.son.play();


        this.largeur=1000;
        this.hauteur=500;




        this.seanim = this.add.sprite(0, 0, 'sea1').setOrigin(0,0);
        this.seanim.setDisplaySize(1000,500)
        this.anims.create({
            key: 'sea',
            frames: [
                {key:'sea1'},
                {key:'sea2'},
                {key:'sea3'},
                {key:'sea4'},
                {key:'sea5'},
                {key:'sea6'},
                {key:'sea7'},
                {key:'sea8'},
                {key:'sea9'},
                {key:'sea10'},
                {key:'sea11'},
                {key:'sea12'},
                {key:'sea13'},
                {key:'sea14'},
                {key:'sea15'},
                {key:'sea16'},
                {key:'sea17'},
                {key:'sea18'},
                {key:'sea19'},
                {key:'sea20'},
                {key:'sea21'},
                {key:'sea22'},
                {key:'sea23'},
                {key:'sea24'},
                {key:'sea25'},
                {key:'sea26'},
                {key:'sea27'},
                {key:'sea28'},
                {key:'sea29'},
                {key:'sea30'},
                {key:'sea31'},
                {key:'sea32'},
                {key:'sea33'},
                {key:'sea34'},
                {key:'sea35'},
                {key:'sea36'},
                {key:'sea37'},
                {key:'sea38'},
                {key:'sea39'},
                {key:'sea40'},
                {key:'sea41'},
                {key:'sea42'},
                {key:'sea43'},
                {key:'sea44'},
                {key:'sea45'},
                {key:'sea46'},
                {key:'sea47'},
                {key:'sea48'},
                {key:'sea49'},
                {key:'sea50'},
                {key:'sea51'},
                {key:'sea52'},
                {key:'sea53'},
                {key:'sea54'},
                {key:'sea55'},
                {key:'sea56'},
                {key:'sea57'},
                {key:'sea58'},
                {key:'sea59'},
                {key:'sea60'},
                {key:'sea61'},
                {key:'sea62'},
                {key:'sea63'},
                {key:'sea64'},
                {key:'sea65'},
                {key:'sea66'},
                {key:'sea67'},
                {key:'sea68'},
                {key:'sea69'},
                {key:'sea70'},
                {key:'sea71'},
                {key:'sea72'},
                {key:'sea73'},
                {key:'sea74'},
                {key:'sea75'},
                {key:'sea76'},
                {key:'sea77'},
                {key:'sea78'},
                {key:'sea79'},
                {key:'sea80'},
                {key:'sea81'},
                {key:'sea82'},
                {key:'sea83'},
                {key:'sea84'},
                {key:'sea85'},
                {key:'sea86'},
                {key:'sea87'},
                {key:'sea88'},
                {key:'sea89'},
                {key:'sea90'},
                {key:'sea91'},
                {key:'sea92'},
                {key:'sea93'},
                {key:'sea94'},
                {key:'sea95'},
                {key:'sea96'},
                {key:'sea97'},
                {key:'sea98'},
                {key:'sea99'},
                {key:'sea100'},
                {key:'sea101'},
                {key:'sea102'},
                {key:'sea103'},
                {key:'sea104'},
                {key:'sea105'},
                {key:'sea106'},
                {key:'sea107'},
                {key:'sea108'},
                {key:'sea109'},
                {key:'sea110'},
                {key:'sea111'},
                {key:'sea112'},
                {key:'sea113'},
                {key:'sea114'},
                {key:'sea115'},
                {key:'sea116'},
                {key:'sea117'},
                {key:'sea118'},
                {key:'sea119'},
                {key:'sea120'},
                {key:'sea121'},
                {key:'sea122'},
                {key:'sea123'},
                {key:'sea124'},
                {key:'sea125'},
                {key:'sea126'},
                {key:'sea127'},
                {key:'sea128'},
                {key:'sea129'},
                {key:'sea130'},
                {key:'sea131'},
                {key:'sea132'},
                {key:'sea133'},
                {key:'sea134'},
                {key:'sea135'},
                {key:'sea136'},
                {key:'sea137'},
                {key:'sea138'},
                {key:'sea139'},
                {key:'sea140'},
                {key:'sea141'},
                {key:'sea142'},
                {key:'sea143'},
                {key:'sea144'},
                {key:'sea145'},
                {key:'sea146'},
                {key:'sea147'},
                {key:'sea148'},
                {key:'sea149'},
                {key:'sea150'},
                {key:'sea151'},
                {key:'sea152'},
                {key:'sea153'},
                {key:'sea154'},
                {key:'sea155'},
                {key:'sea156'},
                {key:'sea157'},
                {key:'sea158'},
                {key:'sea159'},
                {key:'sea160'},
                {key:'sea161'},
                {key:'sea162'},
                {key:'sea163'},
                {key:'sea164'},
                {key:'sea165'},
                {key:'sea166'},
                {key:'sea167'},
                {key:'sea168'},
                {key:'sea169'},
                {key:'sea170'},
                {key:'sea171'},
                {key:'sea172'},
                {key:'sea173'},
                {key:'sea174'},
                {key:'sea175'},
                {key:'sea176'},
                {key:'sea177'},
                {key:'sea178'},
                {key:'sea179'},
                {key:'sea180'},
                {key:'sea181'},
                {key:'sea182'},
                {key:'sea183'},
                {key:'sea184'},
                {key:'sea185'},
                {key:'sea186'},
                {key:'sea187'},
                {key:'sea188'},
                {key:'sea189'},
                {key:'sea190'},
                {key:'sea191'},
                {key:'sea192'},
                {key:'sea193'},
                {key:'sea194'},
                {key:'sea195'},
                {key:'sea196'},
                {key:'sea197'},
                {key:'sea198'},
                {key:'sea199'},
                {key:'sea200'},
                {key:'sea201'},
                {key:'sea202'},
                {key:'sea203'},
                {key:'sea204'},
                {key:'sea205'},
                {key:'sea206'},
                {key:'sea207'},
                {key:'sea208'},
                {key:'sea209'},
                {key:'sea210'},
                {key:'sea211'},
                {key:'sea212'},
                {key:'sea213'},
                {key:'sea214'},
                {key:'sea215'},
                {key:'sea216'},
                {key:'sea217'},
                {key:'sea218'},
                {key:'sea219'},
                {key:'sea220'},
                {key:'sea221'},
                {key:'sea222'},
                {key:'sea223'},
                {key:'sea224'},
                {key:'sea225'},
                {key:'sea226'},
                {key:'sea227'},
                {key:'sea228'},
                {key:'sea229'},
                {key:'sea230'},
                {key:'sea231'},
                {key:'sea232'},
                {key:'sea233'},
                {key:'sea234'},
                {key:'sea235'},
                {key:'sea236'},
                {key:'sea237'},
                {key:'sea238'},
                {key:'sea239'},
                {key:'sea240'},
                {key:'sea241'},
                {key:'sea242'},
                {key:'sea243'},
                {key:'sea244'},
                {key:'sea245'},
                {key:'sea246'},
                {key:'sea247'},
                {key:'sea248'},
                {key:'sea249'},
                {key:'sea250'},
                {key:'sea251'},
                {key:'sea252'},
                {key:'sea253'},
                {key:'sea254'},
                {key:'sea255'},
                {key:'sea256'},
                {key:'sea257'},
                {key:'sea258'},
                {key:'sea259'},
                {key:'sea260'},
                {key:'sea261'},
                {key:'sea262'},
                {key:'sea263'},
                {key:'sea264'},
                {key:'sea265'},
                {key:'sea266'},
                {key:'sea267'},
                {key:'sea268'},
                {key:'sea269'},
                {key:'sea270'},
                {key:'sea271'},
                {key:'sea272'},
                {key:'sea273'},
                {key:'sea274'},
                {key:'sea275'},
                {key:'sea276'},
                {key:'sea277'},
                {key:'sea278'},
                {key:'sea279'},
                {key:'sea280'},
                {key:'sea281'},
                {key:'sea282'},
                {key:'sea283'},
                {key:'sea284'},
                {key:'sea285'},
                {key:'sea286'},
                {key:'sea287'},
                {key:'sea288'},
                {key:'sea289'},
                {key:'sea290'},
                {key:'sea291'},
                {key:'sea292'},
                {key:'sea293'},
                {key:'sea294'},
                {key:'sea295'},
                {key:'sea296'},
                {key:'sea297'},
                {key:'sea298'},
                {key:'sea299'},
                {key:'sea300'},

             ],
            frameRate: 15,
            repeat: -1
        });
        this.seanim.play('sea');

        this.leafanim = this.add.sprite(0, 0, 'leaf1').setOrigin(0,0);
        this.leafanim.setDisplaySize(1000,500)
        this.leafanim.alpha=0.9;
        this.anims.create({
            key: 'leaf',
            frames: [
                {key:'leaf1'},
                {key:'leaf2'},
                {key:'leaf3'},
                {key:'leaf4'},
                {key:'leaf5'},
                {key:'leaf6'},
                {key:'leaf7'},
                {key:'leaf8'},
                {key:'leaf9'},
                {key:'leaf10'},
                {key:'leaf11'},
            ],
            frameRate: 2,
            repeat: -1
        });
        this.leafanim.play('leaf');



        this.balle=this.physics.add.image(this.largeur/2,this.hauteur/2,'cercle1')
        this.balle.setDisplaySize(20,20)
        this.balle.body.setBounce(1.1,1.1)
        this.balle.setVelocityY(0)
        this.balle.setMaxVelocity(200)

        this.tweens.add({
            targets:[this.balle],
            rotation: -6.5,
            ease :'Repeat',
            repeat:1000000,
            duration:1000,
        })
        this.bonus=this.physics.add.image((Math.random(100,900)),(Math.random(100,400)),'cercle1')
        this.bonus.setDisplaySize(20,20)
        this.bonus.body.setAllowGravity(true)
        this.particles = this.add.particles('leafemit');
        this.particles.createEmitter({
            follow:this.bonus,
            angle: { min: 1, max: 360 },
            scale: {start: 0.01, end: 0.1},
            speed: 10,
            gravityY: -1,
            lifespan: { min: 1, max: 200 },
            blendMode: 'ADD',
            alpha:1,
        });
        this.tweens.add({
            targets:[this.bonus],
            rotation: -6.5,
            ease :'Repeat',
            repeat:1000000,
            duration:1000,
        })


        this.particles = this.add.particles('leafemit');
        this.particles.createEmitter({
            follow:this.balle,
            angle: { min: 10, max: 360 },
            scale: {start: 0.01, end: 0.1},
            speed: 80,
            gravityY: -1,
            lifespan: { min: 1, max: 500 },

            /**blendMode: 'ADD'**/
        });

        this.particles = this.add.particles('leafemit');
        this.particles.createEmitter({
            follow:this.balle,
            angle: { min: 10, max: 10 },
            scale: {start: 0.01, end: 0.1},
            speed: 80,
            gravityY: -1,
            lifespan: { min: 1, max: 500 },
            blendMode: 'ADD',
            alpha:0.2,
        });





        this.haut=this.physics.add.image(0,-20,'carre').setOrigin(0,0);
        this.haut.setDisplaySize(this.largeur,20)
        this.haut.body.setAllowGravity(false)
        this.haut.setImmovable(true)


        this.bas=this.physics.add.image(0,this.hauteur,'carre').setOrigin(0,0);
        this.bas.setDisplaySize(this.largeur,20)
        this.bas.body.setAllowGravity(false)
        this.bas.setImmovable(true)


        this.gauche=this.physics.add.image(30,200,'carre1').setOrigin(0,0);
        this.gauche.setDisplaySize(20,100)
        this.gauche.body.setAllowGravity(false)
        this.gauche.setImmovable(true)


        this.droite=this.physics.add.image(950,200,'carre2').setOrigin(0,0);
        this.droite.setDisplaySize(20,100)
        //this.droite.flipX(true)
        this.droite.body.setAllowGravity(false)
        this.droite.setImmovable(true)




        this.physics.add.collider(this.balle,this.bas)
        this.physics.add.collider(this.balle,this.haut)
        this.physics.add.collider(this.balle,this.gauche, function(){
            me.soun1.play();
            me.rebond(me.gauche)
            /**dir=1**/
        })
        this.physics.add.collider(this.balle,this.droite, function(){
            me.soun2.play();
            console.log("touche droite");
            me.rebond(me.droite)
            /**dir=-1**/
        })

        this.physics.add.collider(this.balle,this.bonus, function(){
            console.log("touche bonus");
            me.collisionbonus()
        })




        this.Initiale();
        this.joueurGauche = new Joueur('Joueur 1','joueurGauche')
        this.joueurDroite = new Joueur('Joueur 2','joueurDroite')
        console.log(this.joueurGauche)

        this.initKeyboard()
        /**this.checkBonus()**/
    }

/**Fonction Bonus**/
 /**   Resize(){

    }



**/
    collisionbonus(){
        /**let me=this;**/

        console.log("bonus")
        this.balle.setVelocityX(200)
        /**if ((dir == 1)){
            me.gauche.setDisplaySize(20,150)
        }
        else {
            me.droite.setDisplaySize(20,150)
        }
**/

    }
  /**  checkBonus(){
        if( this.balle.x < this.bonus.x + this.bonus.width &&
            this.balle.x + this.balle.width > this.bonus.x &&
            this.balle.y < this.bonus.y + this.bonus.height &&
            this.balle.height + this.balle.y > this.bonus.y){
            console.log("touche bonus")
        }
    }
**/


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
                    if (me.gauche.y>0){
                        me.gauche.setVelocityY(-200)
                    }
                    else{
                        me.gauche.setY(0)
                        me.gauche.setVelocityY(0)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.X:
                    if (me.gauche.y<400){
                        me.gauche.setVelocityY(200)
                    }
                    else{
                        me.gauche.setVelocityY(0)
                        me.gauche.setY(400)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.J:
                    if (me.droite.y>0){
                        me.droite.setVelocityY(-200)
                    }
                    else{
                        me.droite.setY(0)
                        me.droite.setVelocityY(0)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.N:
                    if (me.droite.y<400){
                        me.droite.setVelocityY(200)
                    }
                    else{
                        me.droite.setY(400)
                        me.droite.setVelocityY(0)

                    }
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
        this.balle.setX((this.largeur/2)-50);
        this.balle.setY((this.hauteur/2));
        this.droite.setDisplaySize(20,100)
        this.gauche.setDisplaySize(20,100)
        this.gauche.setY((this.hauteur/2)-50);
        this.droite.setY((this.hauteur/2)-50);
        this.bonus.setX((Math.random()*900))
        this.bonus.setY((Math.random()*400))
        this.bonus.setVelocityY(0)
        this.bonus.setVelocityX(0)

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