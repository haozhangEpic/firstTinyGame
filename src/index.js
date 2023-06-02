const config = {
  showFps: true,
  width: 200,
  height: 200,
  dip: 1.5,
  renderOptions: {
    backgroundColor: 0x2a3145
  },
  fixSize: true
};
const app = new Tiny.Application(config);
// // 新建场景
// class StartLayer extends Tiny.Container {
//   constructor() {
//     super();
//     // 通过 fromImage 实例化精灵
//     var sprite = Tiny.Sprite.fromImage(
//       "https://gw.alipayobjects.com/as/g/tiny/resources/1.0.0/images/logo.png"
//     );
//     // 设置精灵的中心点
//     sprite.setAnchor(0.5);
//     // 设置精灵相对画布的位置，此处设置居中
//     sprite.setPosition(Tiny.WIN_SIZE.width / 2, Tiny.WIN_SIZE.height / 2);
//     // 将精灵添加到场景中
//     this.addChild(sprite);
//     // 新建 action
//     const rotateTo360Action = Tiny.RotateTo(2000, {
//       rotation: Tiny.deg2radian(360)
//     });
//     // 执行 action RepeatForever
//     sprite.runAction(Tiny.RepeatForever(rotateTo360Action));
//     // 设置精灵可交互的
//     sprite.setEventEnabled(true);
//     // 绑定 tap 和 mouseup 事件
//     sprite.on("click", () => {
//       console.log("taped!");
//     });
//   }
// }
Tiny.Loader.add("res/images/cangshugiegie.png").load(function() {
  let antTexture = Tiny.TextureCache["res/images/cangshugiegie.png"];
  let rect = new Tiny.Rectangle(110, 2, 100, 100);
  antTexture.frame = rect;
  let antSprite = new Tiny.Sprite(antTexture);
  app.run(antSprite);
});
// app.run(new StartLayer());
