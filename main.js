var simpleMazeApp = function (d) {
    "use strict";

    /* Key options:
     * ArrowUp, ArrowRight, ArrowLeft, ArrowDown
     * 8 (up), 6 (right), 4 (left), 2 (down)
     * u (up), k (right), h (left), n (down)
     * action: spacebar */

    var model = {
        htmlTargets: d.targets,
        actionKeys: {
            up: ["ArrowUp", "8", "u"],
            down: ["ArrowDown", "2", "n"],
            left: ["ArrowLeft", "4", "h"],
            right: ["ArrowRight", "6", "k"],
            action: 32 // spacebar
        },
        pos: {
            current: [375, 0], // x, y
            previous: [375, 0] // default
        },
        incr: 25,
        win: [525, 750],
        map: [[375, -25], [0, 0], [25, 0], [50, 0], [75, 0], [100, 0], [125, 0], [150, 0], [175, 0], [200, 0], [225, 0], [250, 0], [275, 0], [300, 0], [325, 0], [350, 0], [400, 0], [425, 0], [450, 0], [475, 0], [400, 0], [425, 0], [450, 0], [475, 0], [500, 0], [525, 0], [550, 0], [575, 0], [600, 0], [625, 0], [650, 0], [675, 0], [700, 0], [725, 0], [750, 0], [0, 25], [0, 50], [0, 75], [0, 100], [0, 125], [0, 150], [0, 175], [0, 200], [0, 225], [0, 250], [0, 275], [0, 300], [0, 325], [0, 350], [0, 375], [0, 400], [0, 425], [0, 450], [0, 475], [0, 500], [0, 525], [0, 550], [0, 575], [0, 600], [0, 625], [0, 650], [0, 675], [0, 700], [0, 725], [0, 750], [25, 750], [50, 750], [75, 750], [100, 750], [125, 750], [150, 750], [175, 750], [200, 750], [225, 750], [250, 750], [275, 750], [300, 750], [325, 750], [350, 750], [375, 750], [400, 750], [425, 750], [450, 750], [475, 750], [500, 750], [550, 750], [575, 750], [600, 750], [625, 750], [650, 750], [675, 750], [700, 750], [725, 750], [750, 750], [750, 725], [750, 700], [750, 675], [750, 650], [750, 625], [750, 600], [750, 575], [750, 550], [750, 525], [750, 500], [750, 475], [750, 450], [750, 425], [750, 400], [750, 375], [750, 350], [750, 325], [750, 300], [750, 275], [750, 250], [750, 225], [750, 200], [750, 175], [750, 150], [750, 125], [750, 100], [750, 75], [750, 50], [750, 25], [525, 775]]
    };

    function checkMap(pos) {
        // Takes in the pos <array>.
        // Returns true if the
        // position is on a map
        // line; false if not.
        const map = model.map;
        var index = 0;
        var len = map.length;
        var inMap = true;

        while (index < len) {
            if (pos[0] === map[index][0] && pos[1] === map[index][1]) {
                // the pointer is on a perimeter
                inMap = false;
                break;
            }
            index += 1;
        }
        return inMap;
    }

    function movePointer(k) {
        // Takes in the key hit <array>.
        // Returns the new position <array>.
        const incr = model.incr;
        var keyName = k[0];
        var keyCode = k[1];
        var x = model.pos.current[0];
        var y = model.pos.current[1];
        var pos = {
            current: [x, y],
            previous: model.pos.previous
        };

        pos.previous = [x, y];

        if (model.actionKeys.up.indexOf(keyName) > -1) {
            y -= incr; // up
        } else if (model.actionKeys.right.indexOf(keyName) > -1) {
            x += incr; // right
        } else if (model.actionKeys.left.indexOf(keyName) > -1) {
            x -= incr; // left
        } else if (model.actionKeys.down.indexOf(keyName) > -1) {
            y += incr; // down
        } else {
            if (keyCode === model.actionKeys.action) {
                // action
                console.log("action");
            }
        }

        pos.current = [x, y];

        // check to see if move is valid before
        // updating the actual position of the pointer
        if (checkMap(pos.current) === false) {
            // revert
            pos.current = pos.previous;
            pos.previous = model.pos.previous;
        }
        return pos;
    }

    // view
    function renderPointer(pos) {
        var pointerEl = model.htmlTargets.pointer;
        pointerEl.style.left = pos[0].toString() + "px";
        pointerEl.style.top = pos[1].toString() + "px";
    }

    // controller
    function main(m) {
        renderPointer(m.pos.current);

        document.addEventListener("keydown", function (item) {
            var keyHit = [item.key, item.keyCode];
            var pos = movePointer(keyHit);

            model.pos.current = pos.current;
            model.pos.previous = pos.previous;

            renderPointer(m.pos.current);

            console.log(model.pos.current);
        });
    }
    main(model);
};
simpleMazeApp(data);