// Photo-essay galleries, listed alongside blog posts but rendered by GalleryPost
// (a dedicated layout) rather than the markdown renderer.
//
// Photos are Getty Images official embeds. Each `embed` string is the exact snippet
// copied from Getty's </> "Embed" button on a given photo — it carries a signed token,
// so it can only come from Getty, not be constructed here. An empty `embed` renders a
// numbered placeholder slot, so the layout is reviewable before the real photos land.

export interface GalleryPhoto {
  type: "photo";
  /** Raw Getty embed snippet from the </> Embed button. "" until supplied. */
  embed: string;
  caption: string;
}

export interface GalleryText {
  type: "text";
  heading?: string;
  body: string;
}

export type GalleryItem = GalleryPhoto | GalleryText;

export interface Gallery {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  /** Lead paragraph(s) under the title; plain text, one entry per paragraph. */
  intro: string[];
  items: GalleryItem[];
}

export const galleries: Gallery[] = [
  {
    id: "world-cup-2026",
    title: "World Cup 2026, in Photographs",
    date: "2026-07-20",
    excerpt:
      "Since the tournament is over and we'll have to wait for another 4 years, let's relive it via some of the best photos",
    intro: [
      "All photographs are embedded from Getty Images. Scroll on.",
    ],
    items: [
      // Example structure — replace `embed` with a real Getty snippet, edit the caption.
      // Add one { type: "photo", embed: "", caption: "" } per image, up to as many as you
      // collect. Drop in { type: "text", ... } wherever you want narrative between photos.
      {
        type: "text",
        heading: "1' CHAMPIONES 🏆",
        body: "Spain conceded a single goal throughout the tournament and proved themselves to be worthy winners in the end",
      },
      {
        type: "photo",
        embed: `<a id='yuFezhKXS5VAo9F_8MNHXQ' class='gie-single' href='https://www.gettyimages.com/detail/2286789864' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'yuFezhKXS5VAo9F_8MNHXQ',sig:'bsHp_stCOu_go-XXqmQQALN1EYuKSPweRll1HGyXvSc=',w:'594px',h:'398px',items:'2286789864',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Not every story has a fairytale ending but Messi's was one hell of a story",
      },
      {
        type: "photo",
        embed: `<a id='jAYwW4c5Ss1ASMHk81AOJw' class='gie-single' href='https://www.gettyimages.com/detail/2286805701' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'jAYwW4c5Ss1ASMHk81AOJw',sig:'NAPAjsS8qNEh4WoSsNa2EZDNiAU5TzoH-JXpf4713DU=',w:'594px',h:'396px',items:'2286805701',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "NGL but the half time show was lit",
      },
      {
        type: "photo",
        embed: `<<a id='ALBqdouXSrZOCnYUSYAqqw' class='gie-single' href='https://www.gettyimages.com/detail/2287767282' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'ALBqdouXSrZOCnYUSYAqqw',sig:'QPjR6aQfggPXjnnvKLGzdiTsKe0YrOXn6_fGf1XECeU=',w:'594px',h:'396px',items:'2287767282',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Moment it became 10 v 11",
      },
      {
        type: "photo",
        embed: `<a id='aTkr-I_yTIts7XCaXtjG4A' class='gie-single' href='https://www.gettyimages.com/detail/2286424430' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'aTkr-I_yTIts7XCaXtjG4A',sig:'k6XHefNQ-HJe0hckiiLYQ7It4ZRfie7HvJVbMb444c4=',w:'396px',h:'594px',items:'2286424430',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "The only goal of the final",
      },
      {
        type: "photo",
        embed: `<div class="getty embed image" style="background-color:#fff;display:inline-block;font-family:Roboto,sans-serif;color:#a7a7a7;font-size:11px;width:100%;max-width:594px;"><div style="padding:0;margin:0;text-align:left;"><a href="https://www.gettyimages.com/detail/2286811552" target="_blank" style="color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;">Embed from Getty Images</a></div><div style="overflow:hidden;position:relative;height:0;padding:66.66667% 0 0 0;width:100%;"><iframe src="//embed.gettyimages.com/embed/2286811552?et=tq3albL3Tz5PXiChnbA3sg&tld=com&sig=zrXxWfgh_VCUYsz3OT4UhTN_88VWhhF7DV7WDRVH5rQ=&caption=true&ver=1" scrolling="no" frameborder="0" width="594" height="396" style="display:inline-block;position:absolute;top:0;left:0;width:100%;height:100%;margin:0;"></iframe></div></div>`,
        caption: "Spain in a final and Torres scores. You've heard that before",
      },
      {
        type: "photo",
        embed: `<a id='_u9yqtYPSNxUxrElzj4byg' class='gie-single' href='https://www.gettyimages.com/detail/2286809913' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'_u9yqtYPSNxUxrElzj4byg',sig:'Gp7mjWgTLCCFC_9nlilprdFQX-mXFXMBghYjL9O5zbc=',w:'594px',h:'399px',items:'2286809913',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Trophy ceremony minus Trump",
      },
      {
        type: "photo",
        embed: `<a id='cHzjDGj8QT5BV4JEJGRMZQ' class='gie-single' href='https://www.gettyimages.com/detail/2286812339' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'cHzjDGj8QT5BV4JEJGRMZQ',sig:'GphIQurdDGUNCMCanGppgRn9cqWk6QW8MPj3HTXxpik=',w:'594px',h:'396px',items:'2286812339',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Champions of the World. Again",
      },
      {
        type: "photo",
        embed: `<a id='ayE3hRQqSh16rvItT7mu1Q' class='gie-single' href='https://www.gettyimages.com/detail/2286821867' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'ayE3hRQqSh16rvItT7mu1Q',sig:'nJDb3tWoje8IWswPXzUZyBTbCaWjqNLfntSf_hMmCn0=',w:'594px',h:'396px',items:'2286821867',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Rodri, Golden Ball",
      },
      {
        type: "photo",
        embed: `<a id='LDL2SQwGTFJhDwdfov_H_g' class='gie-single' href='https://www.gettyimages.com/detail/2286815911' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'LDL2SQwGTFJhDwdfov_H_g',sig:'8kglxkNpbAgHFqEgO0UZlo8yFakBeShBj6FSD7fo_sw=',w:'594px',h:'396px',items:'2286815911',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Pau Cubarsí, Best Young Player. Got kicked into orbit in the final and still walked off with this",
      },
      {
        type: "photo",
        embed: `<a id='_LbulQJHSwlAK7Dazk67uw' class='gie-single' href='https://www.gettyimages.com/detail/2281793040' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'_LbulQJHSwlAK7Dazk67uw',sig:'ITwixIWteCAMJ0Kal_8Xs9ZESVG0RtSMH0lXXUaZ8EE=',w:'475px',h:'594px',items:'2281793040',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Just 18 and he's a Champions League away from completing football",
      },
      {
        type: "photo",
        embed: `<a id='PwWaqGOZRdBta0z5ROBCZQ' class='gie-single' href='https://www.gettyimages.com/detail/2286232511' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'PwWaqGOZRdBta0z5ROBCZQ',sig:'VpCHzj9LQHH4bx7KTXVd7sbRj5FM2iT82QwIGvdqgTE=',w:'594px',h:'396px',items:'2286232511',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Madrid, the moment the whistle went",
      },
      {
        type: "photo",
        embed: `<a id='6-_IW2ZUTOhkJuB_0TRowQ' class='gie-single' href='https://www.gettyimages.com/detail/2286938754' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'6-_IW2ZUTOhkJuB_0TRowQ',sig:'OavYmkf6pTg9SjnT41c000Uk0MRyoassHFPQPwNnA3Q=',w:'594px',h:'396px',items:'2286938754',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Madrid, the morning after",
      },
      {
        type: "text",
        heading: "13' REMEMBER ME?",
        body: "A number footballers made their last appearence this World Cup Finals",
      },
      {
        type: "photo",
        embed: `<a id='_mUvUljrQDxr91XdF9auMQ' class='gie-single' href='https://www.gettyimages.com/detail/2280719911' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'_mUvUljrQDxr91XdF9auMQ',sig:'e7P1sdjYT-CPzmgDrQGdecMcnanX--ykt4HugUDvcOo=',w:'594px',h:'396px',items:'2280719911',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Ochoa",
      },
      {
        type: "photo",
        embed: `<a id='Ca7DV6JrSadS7dVpsCX6MA' class='gie-single' href='https://www.gettyimages.com/detail/2281071964' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'Ca7DV6JrSadS7dVpsCX6MA',sig:'qHn0fLiuIAOZe7usn1K7gVe8vuX2X10q73uYfedfoZY=',w:'594px',h:'396px',items:'2281071964',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "KDB showing emotions? WHAT !!!",
      },
      {
        type: "photo",
        embed: `<a id='1D8doA_AShBdIbbBZxmQbA' class='gie-single' href='https://www.gettyimages.com/detail/2281069898' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'1D8doA_AShBdIbbBZxmQbA',sig:'o4Tqlbzu1QjY1y1lwWc_HlMdHrjRyShWrJMJE5HjbxI=',w:'594px',h:'396px',items:'2281069898',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Just a random German GK",
      },
      {
        type: "photo",
        embed: `<a id='mi1hq1ELS95Y5HW_KkRFbQ' class='gie-single' href='https://www.gettyimages.com/detail/2280509099' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'mi1hq1ELS95Y5HW_KkRFbQ',sig:'9o8mKsHiCGMbRdSiOXSOih3KPkedBFosiGIzvoZL474=',w:'594px',h:'396px',items:'2280509099',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Ha Ha ! Some people still believe I've never been dribbled past by",
      },
      {
        type: "photo",
        embed: `<a id='0cpkLh4yT9ZK0iILL2sf7w' class='gie-single' href='https://www.gettyimages.com/detail/2280184428' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'0cpkLh4yT9ZK0iILL2sf7w',sig:'pS-EQ-u8UDH9s-Jbd_xI1Kl6zGN7XSnDWlRd5YP46_A=',w:'594px',h:'396px',items:'2280184428',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "The Prince who never became King !",
      },
      {
        type: "photo",
        embed: `<a id='vj7BM15hS-ZybAvVTWOb6A' class='gie-single' href='https://www.gettyimages.com/detail/2281286409' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'vj7BM15hS-ZybAvVTWOb6A',sig:'JBrZqVRoljnILT736QTRI3CuQ0pEpsSOjAil5xtm8JE=',w:'396px',h:'594px',items:'2281286409',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Fuck you",
      },
      {
        type: "photo",
        embed: `<a id='qADnyaMDTatX8QvugOE3eQ' class='gie-single' href='https://www.gettyimages.com/detail/2281594658' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'qADnyaMDTatX8QvugOE3eQ',sig:'lOk-ut8Ly_K7-OUzzlt4qtWEUMy2G6I67sYZHJ9p-w4=',w:'594px',h:'396px',items:'2281594658',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Dobbie is tired master",
      },
      {
        type: "photo",
        embed: `<a id='E8DMljpgS8V9zsGnWJDghg' class='gie-single' href='https://www.gettyimages.com/detail/2281747421' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'E8DMljpgS8V9zsGnWJDghg',sig:'iqLXsVk3s8dJk6tAqxbZq_EJKSTti8PPxYQTenCuJOg=',w:'594px',h:'408px',items:'2281747421',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "The only man to score at six World Cups",
      },
      {
        type: "photo",
        embed: `<a id='6WPU6H4NQ5N-HC1Doukq-A' class='gie-single' href='https://www.gettyimages.com/detail/2281293668' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'6WPU6H4NQ5N-HC1Doukq-A',sig:'aBCSTX3_uUiYRPeK9A3MuBYgkcCc9_o7z6CYDAPCHsI=',w:'384px',h:'594px',items:'2281293668',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Six World Cups. One last dance",
      },
      {
        type: "text",
        heading: "22' THE COACHES",
        body: "Some people believe football is a matter of life and death, I am very disappointed with that attitude. I can assure you it is much, much more important than that - Bill Shankly",
      },
      {
        type: "photo",
        embed: `<a id='8_-w7jn3Q7tXNd_Mn2wsDw' class='gie-single' href='https://www.gettyimages.com/detail/2281554235' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'8_-w7jn3Q7tXNd_Mn2wsDw',sig:'qk-pxyvh9tRmCUx0M_uwKKZ7ICmfPSM7AOQRBIM_Vk4=',w:'594px',h:'399px',items:'2281554235',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Tuchel couldn't see his players during the anthem, so he asked FIFA to move the photographers",
      },
      {
        type: "photo",
        embed: `<a id='T7BQ6aM6QXxvH0WfYH_Y1w' class='gie-single' href='https://www.gettyimages.com/detail/2280777869' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'T7BQ6aM6QXxvH0WfYH_Y1w',sig:'PhPFr3GQMIUXOlWct3YY125376VHlHMWmrpBsPo5TcQ=',w:'594px',h:'396px',items:'2280777869',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Don Carlo",
      },
      {
        type: "photo",
        embed: `<a id='PHHUm2VzT29fHTVJakxa5w' class='gie-single' href='https://www.gettyimages.com/detail/2282757487' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'PHHUm2VzT29fHTVJakxa5w',sig:'CqCTejpIIsoywhlM1gCmP3cyMYbTVX2p0_FD02bm7x8=',w:'594px',h:'396px',items:'2282757487',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "El Loco",
      },
      {
        type: "photo",
        embed: `<a id='lQ5I3_7-QxdOAMNiNvC52w' class='gie-single' href='https://www.gettyimages.com/detail/2282069956' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'lQ5I3_7-QxdOAMNiNvC52w',sig:'zn7tskKWuC6sGRvuHonUd_yYVQboUeJuRQMiBiHO_I8=',w:'594px',h:'396px',items:'2282069956',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Naglesmann",
      },
      {
        type: "photo",
        embed: `<a id='R8gtVBM4TcJiPyIHrp89rA' class='gie-single' href='https://www.gettyimages.com/detail/2286684165' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'R8gtVBM4TcJiPyIHrp89rA',sig:'yXmbmb18Jp5HYu6qDrs7YWa1TtqC3qkSZjVQjLlUKyw=',w:'594px',h:'357px',items:'2286684165',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Deschamps. Underachiever?",
      },
      {
        type: "photo",
        embed: `<a id='DuQB_pOJRD1ZIQCgq-wIRA' class='gie-single' href='https://www.gettyimages.com/detail/2282685875' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'DuQB_pOJRD1ZIQCgq-wIRA',sig:'Juy0xj1DqA5HZNZOywiju5tm4rIwb_y2POopBO-eR1o=',w:'594px',h:'396px',items:'2282685875',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Another Argentine named Lionel.",
      },
      {
        type: "photo",
        embed: `<a id='Tt5ClaobRudGBvD3bK72bg' class='gie-single' href='https://www.gettyimages.com/detail/2283785004' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'Tt5ClaobRudGBvD3bK72bg',sig:'KtC7xQ_UvCkhMewwOKSw185T6vmgU3fTdx_VPtzJRic=',w:'481px',h:'594px',items:'2283785004',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "The only Italian to feature this world cup",
      },
      {
        type: "text",
        heading: "29' THE SHOW",
        body: "48 teams, 16 cities, 3 countries and 104 matches. The biggest World Cup ever started at the Azteca, the first stadium to host three opening games",
      },
      {
        type: "photo",
        embed: `<a id='hPeh8u9hQ_Z440uQ5ZMzMg' class='gie-single' href='https://www.gettyimages.com/detail/2280461710' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'hPeh8u9hQ_Z440uQ5ZMzMg',sig:'FxX84DYmG-jBpkqbwHYhN1RIHzysIJP3wz5-USiQWbc=',w:'594px',h:'417px',items:'2280461710',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "The Azteca, hours before kick off",
      },
      {
        type: "photo",
        embed: `<a id='hU8QJl-DTl1GxluTK4MMXg' class='gie-single' href='https://www.gettyimages.com/detail/2281134378' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'hU8QJl-DTl1GxluTK4MMXg',sig:'e29GZnjghhvG7GdLeVwTs2Mh2Q_t6H4Rj7WipenO-aU=',w:'594px',h:'396px',items:'2281134378',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Opening ceremony",
      },
      {
        type: "photo",
        embed: `<a id='m_iaOyKMTRR5l60ntuyN8w' class='gie-single' href='https://www.gettyimages.com/detail/2281108449' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'m_iaOyKMTRR5l60ntuyN8w',sig:'b46gg-wh4y0syzQPQ2Ayr19y0ZCBMSd5vuBZDvHb4wA=',w:'594px',h:'396px',items:'2281108449',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Shakira. Obviously",
      },
      {
        type: "photo",
        embed: `<a id='4uwK3aifSKti0SW-Glea2g' class='gie-single' href='https://www.gettyimages.com/detail/2281127577' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'4uwK3aifSKti0SW-Glea2g',sig:'M7oveeMBMpGzarSY__bePnng07Wwts31JF91qKmHRDA=',w:'594px',h:'396px',items:'2281127577',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "And we're off",
      },
      {
        type: "photo",
        embed: `<a id='JDA18vw1RV5wbQ_zPudhLg' class='gie-single' href='https://www.gettyimages.com/detail/2280436898' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'JDA18vw1RV5wbQ_zPudhLg',sig:'mw7VpjUH6nkjmv4Zy9niIEP99xTR85eEN1x9Di1gBTg=',w:'594px',h:'396px',items:'2280436898',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Monterrey watching the opener",
      },
      {
        type: "photo",
        embed: `<a id='a8NmCCrrQC5VjZu_BMIu3w' class='gie-single' href='https://www.gettyimages.com/detail/2279154447' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'a8NmCCrrQC5VjZu_BMIu3w',sig:'TSqYKi0IS33jHINu8Jw9L8ZiQvrwF8Hgkl3Be8cO-4A=',w:'594px',h:'396px',items:'2279154447',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Seattle, from above",
      },
      {
        type: "photo",
        embed: `<a id='b06zvMgUSPltprh4tAghBw' class='gie-single' href='https://www.gettyimages.com/detail/2284094637' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'b06zvMgUSPltprh4tAghBw',sig:'XNfuowfjdJ-dfamXrT9cTXYnN-vBPUXLFOtdBqV9kWk=',w:'594px',h:'396px',items:'2284094637',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Weather delay at the Azteca before Mexico v Ecuador",
      },
      {
        type: "text",
        heading: "36' HOME COMFORTS",
        body: "Three hosts, and all three made it out of the group",
      },
      {
        type: "photo",
        embed: `<a id='CfZp_cvuRV9T-NMKQ7HohQ' class='gie-single' href='https://www.gettyimages.com/detail/2281117207' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'CfZp_cvuRV9T-NMKQ7HohQ',sig:'fNWWq65DlM64CNPWcaQcE7VMxuxpNURNdIEetnNICYs=',w:'594px',h:'396px',items:'2281117207',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Quiñones opens Mexico's account in the opener",
      },
      {
        type: "photo",
        embed: `<a id='y2TCK_ycRUxw7mWeRFYgZw' class='gie-single' href='https://www.gettyimages.com/detail/2281124878' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'y2TCK_ycRUxw7mWeRFYgZw',sig:'o9HeNllOjsXoYvIQm5nSA3Zlwuw66id5ETisCStibpk=',w:'594px',h:'396px',items:'2281124878',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Raúl Jiménez makes it two",
      },
      {
        type: "photo",
        embed: `<a id='8lW2jc39SkdBg_S_pCnZUQ' class='gie-single' href='https://www.gettyimages.com/detail/2280623150' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'8lW2jc39SkdBg_S_pCnZUQ',sig:'D6STbIAvhBjjoDTDk635UoNdIXiZhtcU7o2LdZBRTdw=',w:'594px',h:'396px',items:'2280623150',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Pulisic celebrating a Paraguayan own goal. A goal is a goal",
      },
      {
        type: "photo",
        embed: `<a id='zENpO9RzTl93AyJkxIp0Lg' class='gie-single' href='https://www.gettyimages.com/detail/2283353908' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'zENpO9RzTl93AyJkxIp0Lg',sig:'xuWp9t-uK_NziAhFOwdq_PuEh7aSkyWSjhCRCtgi5ZM=',w:'594px',h:'396px',items:'2283353908',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Los Angeles turned up",
      },
      {
        type: "photo",
        embed: `<a id='ISwgwswIRztZTapGJMwq8w' class='gie-single' href='https://www.gettyimages.com/detail/2284969399' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'ISwgwswIRztZTapGJMwq8w',sig:'N1EQQe2fGkkaee3qjG6E_jloGSNL-L0X_PDgVjLE72Q=',w:'594px',h:'396px',items:'2284969399',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Tillman's free kick against Belgium. Then Belgium scored four",
      },
      {
        type: "photo",
        embed: `<a id='pjnNkvvyRkR6t634D6oHWA' class='gie-single' href='https://www.gettyimages.com/detail/2283236904' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'pjnNkvvyRkR6t634D6oHWA',sig:'JMjb5MytpWJf9UT8-VE3Mf7oCNNSKEvVlONaulxVoZ0=',w:'594px',h:'396px',items:'2283236904',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Canada's first ever World Cup knockout win",
      },
      {
        type: "text",
        heading: "42' FIRST TIMERS",
        body: "Cabo Verde, Curaçao, Jordan and Uzbekistan made their World Cup debuts, and Haiti returned after 52 years",
      },
      {
        type: "photo",
        embed: `<a id='oMUyuy37TuJBcOU1lrQ2kQ' class='gie-single' href='https://www.gettyimages.com/detail/2281564132' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'oMUyuy37TuJBcOU1lrQ2kQ',sig:'fGkLdOp-1ocrm-uJEwE00CXIccVRMeMXByW14VId-Wg=',w:'594px',h:'396px',items:'2281564132',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "A nation of about 150,000 scoring against Germany",
      },
      {
        type: "photo",
        embed: `<a id='p21Ug7ObS9daY5h2RRO_-A' class='gie-single' href='https://www.gettyimages.com/detail/2281566203' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'p21Ug7ObS9daY5h2RRO_-A',sig:'qRplsoiNNJ9nQTnmsuH3INaofYu_HTTbpHRP-8l-BZY=',w:'594px',h:'367px',items:'2281566203',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "How that felt in the stands",
      },
      {
        type: "photo",
        embed: `<a id='whxh02cSTVdb3MBfdzd-Lg' class='gie-single' href='https://www.gettyimages.com/detail/2281509099' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'whxh02cSTVdb3MBfdzd-Lg',sig:'d1Br4bQOchYPNwoyGqtrA8M5rTIFpmTAAKamRPbvnVg=',w:'594px',h:'396px',items:'2281509099',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Uzbekistan, in the Azteca, standing for their anthem at a World Cup",
      },
      {
        type: "photo",
        embed: `<a id='jkCmGivDT0VJw_5tNtUWkg' class='gie-single' href='https://www.gettyimages.com/detail/2282865942' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'jkCmGivDT0VJw_5tNtUWkg',sig:'Rg3C54V7ATbSnpdcIZd9Pdp3j5z_QA2RQrDS5ezSuT4=',w:'594px',h:'391px',items:'2282865942',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Jordan score against Algeria",
      },
      {
        type: "photo",
        embed: `<a id='hxN-w9dwSkdvTcGQdJKJ_Q' class='gie-single' href='https://www.gettyimages.com/detail/2283178557' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'hxN-w9dwSkdvTcGQdJKJ_Q',sig:'9yDfyi_XP8cMevvXu68zkQHk4VO70_8sXuSBmw9Hnh0=',w:'594px',h:'396px',items:'2283178557',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Haiti fans when they scored against Morocco. Worth the 52 year wait",
      },
      {
        type: "text",
        heading: "47' It is the fans who make the World Cup what it is",
        body: "Being a football fan entitles us to a temporary, recurring retreat, a short holiday from real existence",
      },
      {
        type: "photo",
        embed: `<a id='CxZngXNSR0B-s8yr43gBnQ' class='gie-single' href='https://www.gettyimages.com/detail/2283035866' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'CxZngXNSR0B-s8yr43gBnQ',sig:'7HxrobpWnnVy_T-jEt2Cyo0FaoCqcWMMOtxvlIICNx0=',w:'594px',h:'385px',items:'2283035866',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "It is what it is.",
      },
      {
        type: "photo",
        embed: `<a id='snHYwHlxS5pnDOxvIG5iag' class='gie-single' href='https://www.gettyimages.com/detail/2285555398' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'snHYwHlxS5pnDOxvIG5iag',sig:'w4W10mnR8dpxX__zp9jQngHPvwzHjV3jk9fFGY2mtF4=',w:'594px',h:'396px',items:'2285555398',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Viking boat row",
      },
      {
        type: "photo",
        embed: `<a id='D8sKhIgOSNpFE0lJe0dBtQ' class='gie-single' href='https://www.gettyimages.com/detail/2281689443' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'D8sKhIgOSNpFE0lJe0dBtQ',sig:'HgnWEzGd7Ep8IAm63l125hc99qEjU_UPmoyP-X5KOl8=',w:'594px',h:'396px',items:'2281689443',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Wearing a Real Madrid Jersey to a WC match. Classic Speed.",
      },
      {
        type: "photo",
        embed: `<a id='_99O0_BCSL9hdY9OA7AULg' class='gie-single' href='https://www.gettyimages.com/detail/2285661936' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'_99O0_BCSL9hdY9OA7AULg',sig:'aJ9aemdvOWA-ql0t8fRB0Ma9icRwla-9_8K8X_oGZ1E=',w:'594px',h:'412px',items:'2285661936',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Beunos Aires. Not Jantar Mantar",
      },
      {
        type: "photo",
        embed: `<a id='zK6EP6twTGd8HsJb78Yf4g' class='gie-single' href='https://www.gettyimages.com/detail/2284510498' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'zK6EP6twTGd8HsJb78Yf4g',sig:'P9V8YaPooQESe18VSY_FxcOT2B0qSadUoM9TpLaq8lE=',w:'594px',h:'396px',items:'2284510498',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Socceroos",
      },
      {
        type: "photo",
        embed: `<a id='Letzzn6lRzpphz-SiOOQrQ' class='gie-single' href='https://www.gettyimages.com/detail/2281607103' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'Letzzn6lRzpphz-SiOOQrQ',sig:'0tiH2Ewy0aFbfTNF6I8NkixxcYa_zw6OG37MyRz84UE=',w:'594px',h:'396px',items:'2281607103',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "A young Mexican fan",
      },
      {
        type: "photo",
        embed: `<a id='JNUDU-RpSwZl9FgR6exERA' class='gie-single' href='https://www.gettyimages.com/detail/2282635548' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'JNUDU-RpSwZl9FgR6exERA',sig:'D0f-nByvV1TlfWOCFfarFEHvrAjBMimX3zdxYBUkFFk=',w:'594px',h:'396px',items:'2282635548',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Japanese culture is unbelievable",
      },
      {
        type: "photo",
        embed: `<a id='VXNN4vGJTtBmALGpBPqgew' class='gie-single' href='https://www.gettyimages.com/detail/2281422303' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'VXNN4vGJTtBmALGpBPqgew',sig:'79UNsp9mX2drhcsdB90_2V3v4aQi2OO85lVtV_0DElA=',w:'594px',h:'396px',items:'2281422303',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Toronto",
      },
      {
        type: "photo",
        embed: `<a id='ous2keLARWBVCPF-2R48PA' class='gie-single' href='https://www.gettyimages.com/detail/2281351291' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'ous2keLARWBVCPF-2R48PA',sig:'IJ-eExkC6K_IDQGMU0p-uuuyr2o0dF0Lxx3yWbJnCBo=',w:'594px',h:'395px',items:'2281351291',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Dakar, watching Senegal play France",
      },
      {
        type: "photo",
        embed: `<a id='YyKfJR9FRzpKqvMVnHjWNA' class='gie-single' href='https://www.gettyimages.com/detail/2281467371' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'YyKfJR9FRzpKqvMVnHjWNA',sig:'96nzZ42BTwe_REHP64un4Uc6ACBTdadPbEVzjmkH5jc=',w:'446px',h:'594px',items:'2281467371',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Erbil, Iraq",
      },
      {
        type: "photo",
        embed: `<a id='uODHXEpTRS9gn3kum7SCbQ' class='gie-single' href='https://www.gettyimages.com/detail/2284672251' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'uODHXEpTRS9gn3kum7SCbQ',sig:'4AQTwxlL7WzmKWsTTEeGrhta09fAYJRESeJySGWMvTo=',w:'594px',h:'396px',items:'2284672251',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "EGY vs ARG screening at Gaza",
      },
      {
        type: "text",
        heading: "58' DRESS CODE: OPTIONAL",
        body: "Some fans bring a scarf. Others bring a chicken",
      },
      {
        type: "photo",
        embed: `<a id='fHzFdwjnRDpFktE7L7ONEQ' class='gie-single' href='https://www.gettyimages.com/detail/2282975404' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'fHzFdwjnRDpFktE7L7ONEQ',sig:'OukFeH2oktIiazjSvf8pYrjMGpeb6uw263sFzr_4_L8=',w:'594px',h:'396px',items:'2282975404',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Cabo Verde's finest, dressed as a shark",
      },
      {
        type: "photo",
        embed: `<a id='X7Qb48fWToJIVsBOXOUweQ' class='gie-single' href='https://www.gettyimages.com/detail/2281271392' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'X7Qb48fWToJIVsBOXOUweQ',sig:'0LqQEa3xMEcNZOF7DpW17phoAoQDzh26JzxQrGX6saA=',w:'594px',h:'430px',items:'2281271392',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Brought a chicken. Gave it a sombrero",
      },
      {
        type: "photo",
        embed: `<a id='u9PaN64CR01H3fQHNrv_ug' class='gie-single' href='https://www.gettyimages.com/detail/2284117826' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'u9PaN64CR01H3fQHNrv_ug',sig:'3q8ut8Ftjd2sfMzUdrb54_bPrkA-G9vcAEd43CSKJKM=',w:'475px',h:'594px',items:'2284117826',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Morocco, up close",
      },
      {
        type: "photo",
        embed: `<a id='JZ129eJ1TjlGJpcd2BZqcw' class='gie-single' href='https://www.gettyimages.com/detail/2281179293' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'JZ129eJ1TjlGJpcd2BZqcw',sig:'fbh6pUkXT4gMNuIDNBwK3Vq5kQkstthNeQPsQpEZmic=',w:'594px',h:'396px',items:'2281179293',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "The Dutch brought horses. In orange cowboy hats",
      },
      {
        type: "photo",
        embed: `<a id='GWbX7XtyQ19vfzc_HXFgJg' class='gie-single' href='https://www.gettyimages.com/detail/2282660698' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'GWbX7XtyQ19vfzc_HXFgJg',sig:'nnuP61TEeL3ptFIDdYU-FX5RTvMmJDWTPN6a_xQoNYs=',w:'594px',h:'396px',items:'2282660698',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Two Chapulín Colorados",
      },
      {
        type: "photo",
        embed: `<a id='jEe3L9QPRChg8U_kcBHgwg' class='gie-single' href='https://www.gettyimages.com/detail/2282122058' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'jEe3L9QPRChg8U_kcBHgwg',sig:'9rWaxrrYcyeBROr616xAiyZJiJcrG_Mji-m_6ToZDTg=',w:'396px',h:'594px',items:'2282122058',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Belgian fries, worn as a hat",
      },
      {
        type: "photo",
        embed: `<a id='_o9eCXazQSl22m2-JoBXIQ' class='gie-single' href='https://www.gettyimages.com/detail/2283530438' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'_o9eCXazQSl22m2-JoBXIQ',sig:'QojFC2gOfl9ZUc5qR3F8_L3RMyJ-WcQn8Xjg8c8ktfs=',w:'594px',h:'396px',items:'2283530438',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Brazil, dressed as a fruit bowl",
      },
      {
        type: "photo",
        embed: `<a id='gS2M7rxJQOJUWjpbR4mksA' class='gie-single' href='https://www.gettyimages.com/detail/2284953325' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'gS2M7rxJQOJUWjpbR4mksA',sig:'FU0aWzgb7zh1pbp0vkEg5EJ6ufU6G_4iSg7nwGSuUUg=',w:'594px',h:'396px',items:'2284953325',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Argentina fans dressed as nuns, praying for Messi",
      },
      {
        type: "photo",
        embed: `<a id='kT4k48L0QJxdPolh9AvkSA' class='gie-single' href='https://www.gettyimages.com/detail/2284263793' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'kT4k48L0QJxdPolh9AvkSA',sig:'QEU9U2jxMCAxfn_LH1Gg2km461Kc7mAaPwFo1adXdqE=',w:'594px',h:'408px',items:'2284263793',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Lady Liberty showed up for the Round of 32",
      },
      {
        type: "text",
        heading: "67' THROUGH THE LENS",
        body: "Some of the half a million photos taken at this World Cup were simply art",
      },
      {
        type: "photo",
        embed: `<a id='oaP2zDy-RPpeAGWll2Wkpg' class='gie-single' href='https://www.gettyimages.com/detail/2285708752' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'oaP2zDy-RPpeAGWll2Wkpg',sig:'IGpt4ZvKyAUfFDFF9I2_W8KCOg1Ks9X6tBfbqRkaJ10=',w:'594px',h:'404px',items:'2285708752',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "A corner of Kansas City, and every eye on one man",
      },
      {
        type: "photo",
        embed: `<a id='OVeNG9QIRQhLa-sUmKf75w' class='gie-single' href='https://www.gettyimages.com/detail/2284165820' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'OVeNG9QIRQhLa-sUmKf75w',sig:'CvMFsugV4HASdcnTjizcgHStLyHOhfoNGfwNAEWQP3Y=',w:'594px',h:'396px',items:'2284165820',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Mbappé, in a pool of light",
      },
      {
        type: "photo",
        embed: `<a id='OtVLJ-zXSRNAhWDL7V094g' class='gie-single' href='https://www.gettyimages.com/detail/2283347545' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'OtVLJ-zXSRNAhWDL7V094g',sig:'U8aM4ubgodLpBgl2BgWPb4dNmD2NwMAlzD8VGNVJs7I=',w:'594px',h:'399px',items:'2283347545',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Elanga at full speed",
      },
      {
        type: "photo",
        embed: `<a id='2F6z6fLBR-ZliECiPLkNYg' class='gie-single' href='https://www.gettyimages.com/detail/2285797161' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'2F6z6fLBR-ZliECiPLkNYg',sig:'A1eHz3L_mAGlL7UNixDM6zbTjIICaEpDsIpAf8G1oZY=',w:'482px',h:'594px',items:'2285797161',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Álvarez against Switzerland. Getty flipped it 180°, and it works",
      },
      {
        type: "photo",
        embed: `<a id='JfqSCN6zQEpJ-3gIiJ0KnA' class='gie-single' href='https://www.gettyimages.com/detail/2285889415' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'JfqSCN6zQEpJ-3gIiJ0KnA',sig:'lMp9D1VELZAPQsiy4rZ42wEROvMLtx5VZpyYlXAHdMU=',w:'594px',h:'392px',items:'2285889415',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Boston in infrared. Same pitch, different planet",
      },
      {
        type: "photo",
        embed: `<a id='92QnDqPuQc1mJvuzzJorMg' class='gie-single' href='https://www.gettyimages.com/detail/2285405331' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'92QnDqPuQc1mJvuzzJorMg',sig:'6ZmrhbThWnZivjI-OnnppLZVNmHIKNeDd_yuU88WSxE=',w:'594px',h:'394px',items:'2285405331',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Bounou saves Mbappé's penalty",
      },
      {
        type: "photo",
        embed: `<a id='iuJ3uy-gR_BZbW_CeOD-5g' class='gie-single' href='https://www.gettyimages.com/detail/2284812481' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'iuJ3uy-gR_BZbW_CeOD-5g',sig:'-TNkssoZ3xhy3qaXmK9yHgyhzKZxdW3ooeybkd5kBqM=',w:'594px',h:'394px',items:'2284812481',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Bellingham's diving header at the Azteca",
      },
      {
        type: "photo",
        embed: `<a id='gtHgigrgQgtzlxHIWVwACQ' class='gie-single' href='https://www.gettyimages.com/detail/2284911839' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'gtHgigrgQgtzlxHIWVwACQ',sig:'pPDRAH7TX5fCMSMAPVLY0AItm-LbA_mgukWr-TIPjLI=',w:'594px',h:'396px',items:'2284911839',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Haaland scores past Brazil. You can see the sweat fly",
      },
      {
        type: "text",
        heading: "75' AT BOTH ENDS",
        body: "Goals win you games. Goalkeepers win you tournaments",
      },
      {
        type: "photo",
        embed: `<a id='rdFQZiglR1dLmN9TMQbw7g' class='gie-single' href='https://www.gettyimages.com/detail/2283650809' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'rdFQZiglR1dLmN9TMQbw7g',sig:'MLwJz7FwRcK1SzUkRP1WKCNUrS1xRfc8KYoMSdfokRI=',w:'594px',h:'396px',items:'2283650809',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Messi. Free kick. You know how this ends",
      },
      {
        type: "photo",
        embed: `<a id='AgOtzJC4RrhWxY9eGzxKbQ' class='gie-single' href='https://www.gettyimages.com/detail/2284529316' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'AgOtzJC4RrhWxY9eGzxKbQ',sig:'Bc0ixkoo136JcUo1QEntd3olfX3M5XOxKHwup-LnZGg=',w:'594px',h:'396px',items:'2284529316',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Shoubir saves a Messi penalty. Egypt still lose 3-2",
      },
      {
        type: "photo",
        embed: `<a id='eMStBzUoTjJWb8Bg1r5rcg' class='gie-single' href='https://www.gettyimages.com/detail/2282966992' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'eMStBzUoTjJWb8Bg1r5rcg',sig:'uWvqYq8Go9DuMiwAFhnlBF-yNzOUZNfNbVSsBrUYCq0=',w:'594px',h:'389px',items:'2282966992',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Nuno Mendes from a free kick against Uzbekistan",
      },
      {
        type: "photo",
        embed: `<a id='mu9Js1BtQPBtZOm4y6euqA' class='gie-single' href='https://www.gettyimages.com/detail/2284937039' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'mu9Js1BtQPBtZOm4y6euqA',sig:'3smuCxyBwd-NwGRAFApCTD5zVPvYmzsPCn1yvtKu8H8=',w:'594px',h:'396px',items:'2284937039',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Simón denies Ronaldo",
      },
      {
        type: "photo",
        embed: `<a id='EzWGqS65TkVA2wg5ZF4ICA' class='gie-single' href='https://www.gettyimages.com/detail/2285682318' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'EzWGqS65TkVA2wg5ZF4ICA',sig:'3D6Gkk-iGx0sKQw3C2fMPjmXMaXvPscY8Zsy7YF9RyY=',w:'396px',h:'594px',items:'2285682318',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Bellingham in the quarter final against Norway",
      },
      {
        type: "photo",
        embed: `<a id='i3ZEpEVMR_FY1oug6jTf0Q' class='gie-single' href='https://www.gettyimages.com/detail/2286262392' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'i3ZEpEVMR_FY1oug6jTf0Q',sig:'CPX6yW2PnnAOkiTYS6pQIimMdlXwH3Ce6_LblEqfvz0=',w:'594px',h:'396px',items:'2286262392',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Dibu doing everything he could in the final",
      },
      {
        type: "photo",
        embed: `<a id='Qblu8PYBQrpJk29eyXD8tw' class='gie-single' href='https://www.gettyimages.com/detail/2286768284' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'Qblu8PYBQrpJk29eyXD8tw',sig:'R8Y4y6dsTKOoonGIetqNktRUQLMK4PlQwv41gy2ZUrc=',w:'594px',h:'396px',items:'2286768284',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Saka's hat trick in the Bronze Final",
      },
      {
        type: "photo",
        embed: `<a id='fIKUX9-wRtVo4mglaMPBHw' class='gie-single' href='https://www.gettyimages.com/detail/2286808918' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'fIKUX9-wRtVo4mglaMPBHw',sig:'kAhyOprGdj-WxlnCbgj5s46Ar69SPy3j9SjUax_kad4=',w:'594px',h:'396px',items:'2286808918',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Unai Simón, Golden Glove. One goal conceded all tournament",
      },
      {
        type: "text",
        heading: "83' BLOOD, SWEAT AND TEARS",
        body: "Not every moment was pretty",
      },
      {
        type: "photo",
        embed: `<a id='LwP_iG_ZRhZpHsLUpvGQoQ' class='gie-single' href='https://www.gettyimages.com/detail/2283356152' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'LwP_iG_ZRhZpHsLUpvGQoQ',sig:'55ExrBYbw7Z3KmxpX-d3KyvRC2mLxP7oF9D4BjxUNeU=',w:'594px',h:'401px',items:'2283356152',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Connor Metcalfe needed three stitches",
      },
      {
        type: "photo",
        embed: `<a id='ni8mQ8HwRph1CVmEnx2CLA' class='gie-single' href='https://www.gettyimages.com/detail/2284257138' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'ni8mQ8HwRph1CVmEnx2CLA',sig:'sqDLVnjT2o2O7fk84-xW0BgBNdwlf51qZATk7pvbBdk=',w:'594px',h:'422px',items:'2284257138',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Balogun on Muharemović. Red card after VAR",
      },
      {
        type: "photo",
        embed: `<a id='FjAb3MudSNpczXsoIBJvXQ' class='gie-single' href='https://www.gettyimages.com/detail/2284819159' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'FjAb3MudSNpczXsoIBJvXQ',sig:'_T1ZKCO_0JDBdtBn88Rj0VBypOEVVTQzmfjkTueo-IA=',w:'594px',h:'440px',items:'2284819159',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Jiménez went for the bicycle kick. Big Dan Burn said no",
      },
      {
        type: "photo",
        embed: `<a id='4GzpAUr9TQllBu_myXn4sQ' class='gie-single' href='https://www.gettyimages.com/detail/2281449969' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'4GzpAUr9TQllBu_myXn4sQ',sig:'KzXrpB69b7zeE4hEKhmQ8QbMyjfcyrZvqfEUAcorZyc=',w:'594px',h:'396px',items:'2281449969',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Bruno Guimarães cooling off against Morocco",
      },
      {
        type: "photo",
        embed: `<a id='OArMKxGPQrR0dkaa40GaTQ' class='gie-single' href='https://www.gettyimages.com/detail/2283017225' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'OArMKxGPQrR0dkaa40GaTQ',sig:'5bJpTxwAsjIJUsCzPlw106j_bWkEdv-rAgM4JrXTys0=',w:'594px',h:'396px',items:'2283017225',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Modrić, alone with his thoughts before Panama",
      },
      {
        type: "photo",
        embed: `<a id='IUJ-qjsKRPJQOTr-YLjXNQ' class='gie-single' href='https://www.gettyimages.com/detail/2283190332' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'IUJ-qjsKRPJQOTr-YLjXNQ',sig:'qNYjvz7bVj5F4FFGRIdW8aDLTbTBoYhbVt2m8hyeXuU=',w:'486px',h:'594px',items:'2283190332',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Scotland's tunnel after the 3-0 loss to Brazil",
      },
      {
        type: "text",
        heading: "89' INSTANT CLASSICS",
        body: "Unsurprisingly this features a lot of Messi",
      },
      {
        type: "photo",
        embed: `<a id='vjciRe-gTwBcYENpTYTWZQ' class='gie-single' href='https://www.gettyimages.com/detail/2286509292' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'vjciRe-gTwBcYENpTYTWZQ',sig:'ljotJuRNEQviKQQLLM4SzeAKyryzqCaJFKV-LaLh5Eo=',w:'594px',h:'411px',items:'2286509292',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "The Argentina vs England semi final will always be in the memories of the fan for very long for both the right and wrong reasons",
      },
      {
        type: "photo",
        embed: `<a id='tfMwZTdHT4N43UGcdu-e3Q' class='gie-single' href='https://www.gettyimages.com/detail/2284377668' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'tfMwZTdHT4N43UGcdu-e3Q',sig:'VVvKUR1Kw_4g6E-3r9geQATcEtsfvQDKL0XlCtz_bTI=',w:'594px',h:'396px',items:'2284377668',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "41 years old, Round of 16, and Ronaldo is still going for the bicycle kick",
      },
      {
        type: "photo",
        embed: `<a id='ZB-EkU3bSGtRT4tdZ60zeA' class='gie-single' href='https://www.gettyimages.com/detail/2284555259' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'ZB-EkU3bSGtRT4tdZ60zeA',sig:'oMShS3fQFNSiOfeW2V8W_yDusPgH4DX-yebPlTzfd2Y=',w:'594px',h:'411px',items:'2284555259',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Cabo Verde put two past Dibu Martínez. Nobody had that on their bingo card",
      },
      {
        type: "photo",
        embed: `<a id='P-3kM_VJQtdqM3aq1avHJg' class='gie-single' href='https://www.gettyimages.com/detail/2283929403' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'P-3kM_VJQtdqM3aq1avHJg',sig:'eIg8K_Tes2mUXshJmwahJQ-OxDq37F1INY6EIHojiuo=',w:'594px',h:'397px',items:'2283929403',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Paraguay's Orlando Gill saves from Woltemade and Germany go out on penalties",
      },
      {
        type: "photo",
        embed: `<a id='q3LRS9dBQ51BYeN1lz6YTw' class='gie-single' href='https://www.gettyimages.com/detail/2283925374' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'q3LRS9dBQ51BYeN1lz6YTw',sig:'H7QGopNAD0hX1i-8f8juTSMNVc_FTNHzm1tp_MEaz2Q=',w:'594px',h:'405px',items:'2283925374',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Gustavo Gómez as Paraguay knock out Germany",
      },
      {
        type: "photo",
        embed: `<a id='6fRNl9xZS-dp6YaVJ_iZ_Q' class='gie-single' href='https://www.gettyimages.com/detail/2283651913' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'6fRNl9xZS-dp6YaVJ_iZ_Q',sig:'YIPuZ8j8eu_tpfCYdtlBSarhhU8nqRKa41pqGe2c9v8=',w:'594px',h:'400px',items:'2283651913',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Kalajdžić's 96th minute equaliser. Austria 3-3 Algeria",
      },
      {
        type: "photo",
        embed: `<a id='J98EzmMoSOx8OHT4sUk4Eg' class='gie-single' href='https://www.gettyimages.com/detail/2284239629' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'J98EzmMoSOx8OHT4sUk4Eg',sig:'ZdGpSvJd11iq4bDui2gJzXLTEQU0RFGCQxS_Y5csLWc=',w:'594px',h:'412px',items:'2284239629',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Tielemans, 89th minute, finishing Belgium's comeback against Senegal",
      },
      {
        type: "photo",
        embed: `<a id='qUFy19jARv9A6qfHrLIrXQ' class='gie-single' href='https://www.gettyimages.com/detail/2284222316' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'qUFy19jARv9A6qfHrLIrXQ',sig:'7shOuO5hJxv10czdSCx1LX2qtm4z9Ki14Cv3mk8ztis=',w:'594px',h:'422px',items:'2284222316',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Kane and Bellingham after the late goals against Congo DR",
      },
      {
        type: "photo",
        embed: `<a id='KOo7r8UBRURTl_oDPIHDqw' class='gie-single' href='https://www.gettyimages.com/detail/2283884766' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'KOo7r8UBRURTl_oDPIHDqw',sig:'8lBvINpdDsmLbPAs-ZykPP0g8NlPR_GJ3yCAFRG9h7A=',w:'594px',h:'396px',items:'2283884766',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Japan take the lead against Brazil",
      },
      {
        type: "photo",
        embed: `<a id='wZXDBeOvQgVdy021JdNwyQ' class='gie-single' href='https://www.gettyimages.com/detail/2284794314' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'wZXDBeOvQgVdy021JdNwyQ',sig:'G7dAi1RkD84xXqGBB2f6_lQrmXcWzodD2Lu9m8eemEg=',w:'594px',h:'430px',items:'2284794314',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Haaland finally gets his World Cup moment and Brazil go home",
      },
      {
        type: "photo",
        embed: `<a id='y--PlF0yR21-xH4pTEt7qg' class='gie-single' href='https://www.gettyimages.com/detail/2285098463' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'y--PlF0yR21-xH4pTEt7qg',sig:'isWy6nKOvoFRVwWxILvOKerZN5AbF2KWXbCO-g7NuC0=',w:'594px',h:'412px',items:'2285098463',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Missed a penalty, went 2-0 down, won 3-2",
      },
      {
        type: "photo",
        embed: `<a id='8rm43aenSHRlujNyfuExxA' class='gie-single' href='https://www.gettyimages.com/detail/2285411596' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'8rm43aenSHRlujNyfuExxA',sig:'C8ImmgnWIsw7uN_pIouFwWpKTy2ca1Ka-M4suLggOuo=',w:'594px',h:'426px',items:'2285411596',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Mbappé misses a penalty, then scores anyway",
      },
      {
        type: "text",
        heading: "101' The streets will never forget",
        body: "Countless moments that will live in memory for some time from now",
      },
      {
        type: "photo",
        embed: `<a id='j59ILe0nQEF1oIUwWwqt5g' class='gie-single' href='https://www.gettyimages.com/detail/2281893668' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'j59ILe0nQEF1oIUwWwqt5g',sig:'OQ1u3cF4yOr8oMu8goUqKWL2C2ZWCBPr3GpfN4BUx3s=',w:'594px',h:'427px',items:'2281893668',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Vozinha became an instant social media celebrity with his follower count growing from 50K to 27.8M",
      },
      {
        type: "photo",
        embed: `<a id='o8830FleRbRMOVfGB5uvMw' class='gie-single' href='https://www.gettyimages.com/detail/2281462820' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'o8830FleRbRMOVfGB5uvMw',sig:'VWA-zbPX-MmZJJlQzGAjaPWXMT4EQ3SMknSNnWO9leM=',w:'594px',h:'409px',items:'2281462820',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Scotland fans when McGinn scored against Haiti",
      },
      {
        type: "photo",
        embed: `<a id='yh-9EqC5Q1hMkf8kRf62Vg' class='gie-single' href='https://www.gettyimages.com/detail/2281336654' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'yh-9EqC5Q1hMkf8kRf62Vg',sig:'crFjxfxwArcuPgjTvF7wzbPQp1lAGwcB8QBt1KcCqGM=',w:'594px',h:'396px',items:'2281336654',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Merlin the duck. Mexico's biggest fan",
      },
      {
        type: "photo",
        embed: `<a id='mXDrFDckSShAVnT8UkAk6w' class='gie-single' href='https://www.gettyimages.com/detail/2281377664' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'mXDrFDckSShAVnT8UkAk6w',sig:'3aqOM2fQOnVT7J2nVU0qa_A_VpJNmhpUvH0jr6nGD1U=',w:'594px',h:'423px',items:'2281377664',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Colombia fans at the Angel of Independence, Mexico City",
      },
      {
        type: "photo",
        embed: `<a id='avFH7yE1QJVHh7RO6Mks8Q' class='gie-single' href='https://www.gettyimages.com/detail/2282188462' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'avFH7yE1QJVHh7RO6Mks8Q',sig:'NkQWmID_uchmOA91EFGge_-HwkQ1zBP0GutHKMbw004=',w:'594px',h:'396px',items:'2282188462',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Times Square's red steps, Norway edition",
      },
      {
        type: "photo",
        embed: `<a id='3nIHPzocTtZ1GoyPI-CMZA' class='gie-single' href='https://www.gettyimages.com/detail/2285679500' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'3nIHPzocTtZ1GoyPI-CMZA',sig:'YQjyB16dGJOKw-HO36UU4MIzSK-tmFwLhIZIb1tAqVI=',w:'594px',h:'396px',items:'2285679500',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Chattogram, Bangladesh. Climbing a monument to watch Argentina v England",
      },
      {
        type: "photo",
        embed: `<a id='5fw-y8fES9heoQRVQq4C_A' class='gie-single' href='https://www.gettyimages.com/detail/2286820058' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'5fw-y8fES9heoQRVQq4C_A',sig:'dMo76wj5cNG41sCJxssvE_hdVaeJlCkZdor0ETppQ58=',w:'594px',h:'396px',items:'2286820058',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Lamine Yamal, his little brother Keyne and the World Cup",
      },
      {
        type: "photo",
        embed: `<a id='DUo5fFQvTZ5WOd5sybfeLA' class='gie-single' href='https://www.gettyimages.com/detail/2286807199' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'DUo5fFQvTZ5WOd5sybfeLA',sig:'k4CuAMccm07mvrcwSFN_XXD6cW6Qt_vocvDf6DzzpJQ=',w:'396px',h:'594px',items:'2286807199',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Passing of the torch",
      },
      {
        type: "photo",
        embed: `<a id='xSReaSZoT8NpZt9L9xA9DA' class='gie-single' href='https://www.gettyimages.com/detail/2286815084' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'xSReaSZoT8NpZt9L9xA9DA',sig:'Eb8Gjsk-kP_TH3Skh0tcTz1jh7cWXxKX0Hx05hyg3-Y=',w:'594px',h:'407px',items:'2286815084',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Even the winners had time for Messi",
      },
      {
        type: "text",
        heading: "110' Despair",
        body: "Sometimes it's not meant to be",
      },
      {
        type: "photo",
        embed: `<a id='h69TgBKtRh9Qmn7ONUj8_w' class='gie-single' href='https://www.gettyimages.com/detail/2284397079' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'h69TgBKtRh9Qmn7ONUj8_w',sig:'mJnvhmGjfb0PvZtSoMmZc5vBBT2xoqmHU2KDb2dTDLE=',w:'594px',h:'396px',items:'2284397079',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "The last dance ends in Dallas",
      },
      {
        type: "photo",
        embed: `<a id='pEuI2XPUQVBYrbKuOLpESw' class='gie-single' href='https://www.gettyimages.com/detail/2284797497' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'pEuI2XPUQVBYrbKuOLpESw',sig:'b_SrYJ-q_MHbTm-DPTW3pKaXRmtH2DR7TB3TQByRNCc=',w:'594px',h:'396px',items:'2284797497',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "And the Prince's story ends without a crown",
      },
      {
        type: "photo",
        embed: `<a id='etcpPK8RRghLu07WgyHMvQ' class='gie-single' href='https://www.gettyimages.com/detail/2283925311' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'etcpPK8RRghLu07WgyHMvQ',sig:'rL0kJ2lVjrTYbmCwaEq98mqtpgNWZJShZouft26Nzng=',w:'594px',h:'433px',items:'2283925311',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Tah's penalty in the shootout. Germany go out",
      },
      {
        type: "photo",
        embed: `<a id='QK-Cnwb8Thh69o0QC8Jqcg' class='gie-single' href='https://www.gettyimages.com/detail/2283411513' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'QK-Cnwb8Thh69o0QC8Jqcg',sig:'c82iF4exKGDNcFKXj6wOFpRldZdxZPcPxFVQKxst458=',w:'594px',h:'396px',items:'2283411513',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Germany out in the Round of 32 on penalties. He's taking it well",
      },
      {
        type: "photo",
        embed: `<a id='ojbWI80nT_1pbHt7KiTdlg' class='gie-single' href='https://www.gettyimages.com/detail/2284976935' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'ojbWI80nT_1pbHt7KiTdlg',sig:'H5GpFNWydl8_vSudKhKH0X5psWB1AFcGFOJ9kim2RRI=',w:'594px',h:'393px',items:'2284976935',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "The hosts are out. 1-4 to Belgium in Seattle",
      },
      {
        type: "photo",
        embed: `<a id='VB2HLG3GRKBnfYs6V2zM_Q' class='gie-single' href='https://www.gettyimages.com/detail/2285123918' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'VB2HLG3GRKBnfYs6V2zM_Q',sig:'o2Bei5ZyiILxjXPtxtsdTTDrTe4cRUm0wddEQvzVl7M=',w:'594px',h:'396px',items:'2285123918',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Colombia, out on penalties to Switzerland",
      },
      {
        type: "photo",
        embed: `<a id='XKjO2TMERAFWguUWov0faQ' class='gie-single' href='https://www.gettyimages.com/detail/2285417319' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'XKjO2TMERAFWguUWov0faQ',sig:'v42DVso7EQ5uzK0x-2heu_6gbrI0B_UpeZQoHI7WhQo=',w:'594px',h:'420px',items:'2285417319',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Hakimi after Morocco's quarter final exit",
      },
      {
        type: "photo",
        embed: `<a id='0XZs8KsSQxpicnrImMKKAw' class='gie-single' href='https://www.gettyimages.com/detail/2286290437' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'0XZs8KsSQxpicnrImMKKAw',sig:'wsGZu2Fk6g_xmNP7a9fvircDWjM59wXu4PRwhdvVkwc=',w:'594px',h:'406px',items:'2286290437',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Kane, still waiting",
      },
      {
        type: "photo",
        embed: `<a id='POcMSLq0RpVX9mkB-XhceQ' class='gie-single' href='https://www.gettyimages.com/detail/2286686266' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'POcMSLq0RpVX9mkB-XhceQ',sig:'OHGRJxhvAWQgA3DgU0c1vtiEpXySeYkuXTH1d3hBqKA=',w:'594px',h:'405px',items:'2286686266',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Mbappé walks off after the Bronze Final",
      },
      {
        type: "photo",
        embed: `<a id='FKTjWqwaTLhrvQG98VNDjQ' class='gie-single' href='https://www.gettyimages.com/detail/2287293496' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'FKTjWqwaTLhrvQG98VNDjQ',sig:'NAUp5PjFKK7rC_cymG0hUnNgog7Nv_Y6-as2907lN6w=',w:'594px',h:'424px',items:'2287293496',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Silver",
      },
      {
        type: "photo",
        embed: `<a id='cmLT7FP9SDVU0dhWUe4UVw' class='gie-single' href='https://www.gettyimages.com/detail/2286242861' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'cmLT7FP9SDVU0dhWUe4UVw',sig:'06Vly0y5Pf4pUO5_pA-q7rcroy3EYSeHLMDlz6xuKvE=',w:'396px',h:'594px',items:'2286242861',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Sometimes it's just not meant to be",
      },
    ],
  },
];

export const galleryPhotoCount = (gallery: Gallery): number =>
  gallery.items.filter((item) => item.type === "photo").length;
