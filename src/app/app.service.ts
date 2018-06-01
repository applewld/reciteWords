import { Injectable } from '@angular/core';

@Injectable()
export class AppGlobal {
    static wordCards:any=[//单词卡片
      {
        chinese:"动物",
        english:"animal",
        words:[{english:"bear",chinese:"熊"},{english:"bull",chinese:"公牛"},{english:"goat",chinese:"山羊"},{english:"lion",chinese:"狮"},{english:"panda",chinese:"熊猫"},{english:"tiger",chinese:"虎"},{english:"wolf",chinese:"狼"},{english:"zebra",chinese:"斑马"}],
        src:"../../assets/imgs/animal/bear.png",
        //question1看图识词
        questions1:[
          {
            src:'../../assets/imgs/animal/bear.png',
            chinese:'熊',
            english:'bear',
            option1:{value:"bear", TOF:true}, option2:{value:"bull", TOF:false}, option3:{value:"goat", TOF:false}, option4:{value:"lion", TOF:false}
          },
          {
            src:'../../assets/imgs/animal/zebra.png',
            chinese:'斑马',
            english:'zebra',
            option1:{value:"bear", TOF:false}, option2:{value:"lion", TOF:false}, option3:{value:"goat", TOF:false}, option4:{value:"zebra", TOF:true}
          },
          {
            src:'../../assets/imgs/animal/wolf.png',
            chinese:'狼',
            english:'wolf',
            option1:{value:"bear", TOF:false}, option2:{value:"wolf", TOF:true}, option3:{value:"goat", TOF:false}, option4:{value:"zebra", TOF:false}
          },
          {
            src:'../../assets/imgs/animal/goat.png',
            chinese:'山羊',
            english:'goat',
            option1:{value:"wolf", TOF:false}, option2:{value:"bull", TOF:false}, option3:{value:"goat", TOF:true}, option4:{value:"zebra", TOF:false}
          },
          {
            src:'../../assets/imgs/animal/tiger.png',
            chinese:'虎',
            english:'tiger',
            option1:{value:"tiger", TOF:true}, option2:{value:"bull", TOF:false}, option3:{value:"goat", TOF:false}, option4:{value:"zebra", TOF:false}
          },
          {
            src:'../../assets/imgs/animal/lion.png',
            chinese:'狮',
            english:'lion',
            option1:{value:"bear", TOF:false}, option2:{value:"bull", TOF:false}, option3:{value:"lion", TOF:true}, option4:{value:"zebra", TOF:false}
          },
          {
            src:'../../assets/imgs/animal/panda.png',
            chinese:'熊猫',
            english:'panda',
            option1:{value:"panda", TOF:true}, option2:{value:"bull", TOF:false}, option3:{value:"goat", TOF:false}, option4:{value:"zebra", TOF:false}
          },
          {
            src:'../../assets/imgs/animal/bull.png',
            chinese:'公牛',
            english:'bull',
            option1:{value:"bear", TOF:false}, option2:{value:"bull", TOF:true}, option3:{value:"goat", TOF:false}, option4:{value:"zebra", TOF:false}
          },
          {
            src:'../../assets/imgs/animal/goat.png',
            chinese:'山羊',
            english:'goat',
            option1:{value:"bear", TOF:false}, option2:{value:"bull", TOF:false}, option3:{value:"goat", TOF:true}, option4:{value:"zebra", TOF:false}
          },
          {
            src:'../../assets/imgs/animal/zebra.png',
            chinese:'斑马',
            english:'zebra',
            option1:{value:"bear", TOF:false}, option2:{value:"bull", TOF:false}, option3:{value:"goat", TOF:false}, option4:{value:"zebra", TOF:true}
          },
        ]
      },
      {
        chinese:"身体",
        english:"body",
        words:[{english:"ear",chinese:"耳朵"},{english:"eye",chinese:"眼睛"},{english:"face",chinese:"脸"},{english:"forehead",chinese:"额头"},{english:"hair",chinese:"头发"},{english:"head",chinese:"头"},{english:"nose",chinese:"鼻子"},{english:"wrinkle",chinese:"皱纹"}],
        src:"../../assets/imgs/body/ear.png",
        //question1看图识词
        questions1:[
          {
            src:'../../assets/imgs/body/ear.png',
            chinese:'耳朵',
            english:'ear',
            option1:{value:"ear", TOF:true}, option2:{value:"face", TOF:false}, option3:{value:"forehead", TOF:false}, option4:{value:"hair", TOF:false}
          },
          {
            src:'../../assets/imgs/body/eye.png',
            chinese:'眼睛',
            english:'eye',
            option1:{value:"ear", TOF:false}, option2:{value:"head", TOF:false}, option3:{value:"eye", TOF:true}, option4:{value:"forehead", TOF:false}
          },
          {
            src:'../../assets/imgs/body/face.png',
            chinese:'脸',
            english:'face',
            option1:{value:"wrinkle", TOF:false}, option2:{value:"face", TOF:true}, option3:{value:"eye", TOF:false}, option4:{value:"head", TOF:false}
          },
          {
            src:'../../assets/imgs/body/forehead.png',
            chinese:'额头',
            english:'forehead',
            option1:{value:"head", TOF:false}, option2:{value:"wrinkle", TOF:false}, option3:{value:"forehead", TOF:true}, option4:{value:"face", TOF:false}
          },
          {
            src:'../../assets/imgs/body/hair.png',
            chinese:'头发',
            english:'hair',
            option1:{value:"hair", TOF:true}, option2:{value:"head", TOF:false}, option3:{value:"face", TOF:false}, option4:{value:"forehead", TOF:false}
          },
          {
            src:'../../assets/imgs/body/head.png',
            chinese:'头',
            english:'head',
            option1:{value:"nose", TOF:false}, option2:{value:"wrinkle", TOF:false}, option3:{value:"head", TOF:true}, option4:{value:"face", TOF:false}
          },
          {
            src:'../../assets/imgs/body/nose.png',
            chinese:'鼻子',
            english:'nose',
            option1:{value:"nose", TOF:true}, option2:{value:"face", TOF:false}, option3:{value:"forehead", TOF:false}, option4:{value:"wrinkle", TOF:false}
          },
          {
            src:'../../assets/imgs/body/wrinkle.png',
            chinese:'皱纹',
            english:'wrinkle',
            option1:{value:"ear", TOF:false}, option2:{value:"wrinkle", TOF:true}, option3:{value:"nose", TOF:false}, option4:{value:"face", TOF:false}
          },
          {
            src:'../../assets/imgs/body/ear.png',
            chinese:'耳朵',
            english:'ear',
            option1:{value:"wrinkle", TOF:false}, option2:{value:"nose", TOF:false}, option3:{value:"ear", TOF:true}, option4:{value:"forehead", TOF:false}
          },
          {
            src:'../../assets/imgs/body/hair.png',
            chinese:'头发',
            english:'hair',
            option1:{value:"forehead", TOF:false}, option2:{value:"hair", TOF:true}, option3:{value:"nose", TOF:false}, option4:{value:"wrinkle", TOF:false}
          },
        ]
      },

      {
        chinese:"国家",
        english:"country",
        words:[{english:"America",chinese:"美国"},{english:"Australia",chinese:"澳大利亚"},{english:"Britain",chinese:"英国"},{english:"Canada",chinese:"加拿大"},{english:"China",chinese:"中国"},{english:"Egypt",chinese:"埃及"},{english:"Germany",chinese:"德国"},{english:"Hungary",chinese:"匈牙利"}],
        src:"../../assets/imgs/country/America.png"
      },
      {
        chinese:"方向",
        english:"direction",
        words:[{english:"behind",chinese:"后面"},{english:"front",chinese:"前面"},{english:"in",chinese:"里面"},{english:"left",chinese:"左面"},{english:"on",chinese:"上面"},{english:"out",chinese:"外面"},{english:"right",chinese:"右面"},{english:"under",chinese:"下面"}],
        src:"../../assets/imgs/direction/behind.png"
      },
    ];

}
