const { animate, svg } = anime;

      // Motion path tween params from the path selector
      const motion = svg.createMotionPath('#suzuka'); // maps translateX, translateY, rotate [web:7][web:11]

      // Animate the "car" along the path with rotation
      const carAnimation = animate('.car', {
        ...motion,
        duration: 5000,
        ease: 'linear',
        loop: true
      }); // [web:7][web:11]

      // Optional: draw a stroke that follows the same timing as the motion
      const drawable = svg.createDrawable('#suzuka'); // returns a drawable target [web:7][web:11]
      animate(drawable, {
        draw: '0 1',
        duration: 5000,
        ease: 'linear',
        loop: true
      }); // [web:7][web:11]