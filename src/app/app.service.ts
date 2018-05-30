import { Injectable } from '@angular/core';

@Injectable()
export class AppGlobal {
    static wordCards:any=[
      {
        chinese:"动物",
        english:"animal",
        words:[{english:"bear",chinese:"熊"},{english:"bull",chinese:"公牛"},{english:"goat",chinese:"山羊"},{english:"lion",chinese:"狮"},{english:"panda",chinese:"熊"},{english:"tiger",chinese:"虎"},{english:"wolf",chinese:"狼"},{english:"zebra",chinese:"斑马"}],
        src:"../../assets/imgs/animal/bear.png"
      },
      {
        chinese:"身体",
        english:"body",
        words:[{english:"ear",chinese:"耳朵"},{english:"eye",chinese:"眼睛"},{english:"face",chinese:"脸"},{english:"forehead",chinese:"额头"},{english:"hair",chinese:"头发"},{english:"head",chinese:"头"},{english:"nose",chinese:"鼻子"},{english:"wrinkle",chinese:"皱纹"}],
        src:"../../assets/imgs/body/ear.png"
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
