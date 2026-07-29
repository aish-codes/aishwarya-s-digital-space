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
        embed: `<div class="getty embed image" style="background-color:#fff;display:inline-block;font-family:Roboto,sans-serif;color:#a7a7a7;font-size:11px;width:100%;max-width:594px;"><div style="padding:0;margin:0;text-align:left;"><a href="https://www.gettyimages.com/detail/2286811552" target="_blank" style="color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;">Embed from Getty Images</a></div><div style="overflow:hidden;position:relative;height:0;padding:66.66667% 0 0 0;width:100%;"><iframe src="//embed.gettyimages.com/embed/2286811552?et=tq3albL3Tz5PXiChnbA3sg&tld=com&sig=zrXxWfgh_VCUYsz3OT4UhTN_88VWhhF7DV7WDRVH5rQ=&caption=true&ver=1" scrolling="no" frameborder="0" width="594" height="396" style="display:inline-block;position:absolute;top:0;left:0;width:100%;height:100%;margin:0;"></iframe></div></div>`,
        caption: "Spain in a final and Torres scores. You've heard that before",
      },
      {
        type: "photo",
        embed: `<a id='_LbulQJHSwlAK7Dazk67uw' class='gie-single' href='https://www.gettyimages.com/detail/2281793040' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'_LbulQJHSwlAK7Dazk67uw',sig:'ITwixIWteCAMJ0Kal_8Xs9ZESVG0RtSMH0lXXUaZ8EE=',w:'475px',h:'594px',items:'2281793040',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Just 18 and he's a Champions League away from completing football",
      },
      {
        type: "photo",
        embed: `<a id='jAYwW4c5Ss1ASMHk81AOJw' class='gie-single' href='https://www.gettyimages.com/detail/2286805701' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'jAYwW4c5Ss1ASMHk81AOJw',sig:'NAPAjsS8qNEh4WoSsNa2EZDNiAU5TzoH-JXpf4713DU=',w:'594px',h:'396px',items:'2286805701',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "NGL but the half time show was lit",
      },
      {
        type: "photo",
        embed: `<a id='yuFezhKXS5VAo9F_8MNHXQ' class='gie-single' href='https://www.gettyimages.com/detail/2286789864' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'yuFezhKXS5VAo9F_8MNHXQ',sig:'bsHp_stCOu_go-XXqmQQALN1EYuKSPweRll1HGyXvSc=',w:'594px',h:'398px',items:'2286789864',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Not every story has a fairytale ending but Messi's was one hell of a story",
      },
      {
        type: "photo",
        embed: `<a id='_u9yqtYPSNxUxrElzj4byg' class='gie-single' href='https://www.gettyimages.com/detail/2286809913' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'_u9yqtYPSNxUxrElzj4byg',sig:'Gp7mjWgTLCCFC_9nlilprdFQX-mXFXMBghYjL9O5zbc=',w:'594px',h:'399px',items:'2286809913',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Trophy ceremony minus Trump",
      },
      {
        type: "photo",
        embed: `<<a id='ALBqdouXSrZOCnYUSYAqqw' class='gie-single' href='https://www.gettyimages.com/detail/2287767282' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'ALBqdouXSrZOCnYUSYAqqw',sig:'QPjR6aQfggPXjnnvKLGzdiTsKe0YrOXn6_fGf1XECeU=',w:'594px',h:'396px',items:'2287767282',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Moment it became 10 v 11",
      },
      {
        type: "text",
        heading: "7' REMEMBER ME?",
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
        type: "text",
        heading: "14' THE COACHES",
        body: "Some people believe football is a matter of life and death, I am very disappointed with that attitude. I can assure you it is much, much more important than that - Bill Shankly",
      },
      {
        type: "photo",
        embed: `<a id='e6WSIhxZSD9oq1Jt2DzApA' class='gie-single' href='https://www.gettyimages.com/detail/2286671968' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'e6WSIhxZSD9oq1Jt2DzApA',sig:'2uwYETiCIDBL3pGLHuzp7hPhlOB8BoPTUzIbBk1GkZI=',w:'594px',h:'387px',items:'2286671968',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Thomas Tuchel",
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
        heading: "21' It is the fans who make the World Cup what it is",
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
        embed: `<a id='uODHXEpTRS9gn3kum7SCbQ' class='gie-single' href='https://www.gettyimages.com/detail/2284672251' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'uODHXEpTRS9gn3kum7SCbQ',sig:'4AQTwxlL7WzmKWsTTEeGrhta09fAYJRESeJySGWMvTo=',w:'594px',h:'396px',items:'2284672251',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "EGY vs ARG screening at Gaza",
      },
      {
        type: "text",
        heading: "21' The streets will never forget",
        body: "Countless moments that will live in memory for some time from now",
      },
      {
        type: "photo",
        embed: `<a id='j59ILe0nQEF1oIUwWwqt5g' class='gie-single' href='https://www.gettyimages.com/detail/2281893668' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'j59ILe0nQEF1oIUwWwqt5g',sig:'OQ1u3cF4yOr8oMu8goUqKWL2C2ZWCBPr3GpfN4BUx3s=',w:'594px',h:'427px',items:'2281893668',caption: true ,tld:'com',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script>`,
        caption: "Vozinha became an instant social media celebrity with his follower count growing from 50K to 27.8M",
      },
      {
        type: "text",
        heading: "22' Despair",
        body: "Sometimes it's not meant to be",
      },
    ],
  },
];

export const galleryPhotoCount = (gallery: Gallery): number =>
  gallery.items.filter((item) => item.type === "photo").length;
