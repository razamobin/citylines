
var mastercolors = [
    //{'bg':'#E3032B', 'primary':'#fecad3', 'highlight':'#fecad3'},
    //{'bg':'#E3032B', 'primary':'#fee4e9', 'highlight':'#fee4e9'},
    //{'bg':'#E3032B', 'primary':'#EFF1ED', 'highlight':'#EFF1ED'},
    //{'bg':'#2a70ae', 'primary':'#f9f0de', 'highlight':'#f9f0de'},
    //{'bg':'#F7F7FF', 'primary':'#A80874', 'highlight':'#A80874'},
    //{'bg':'#005742', 'primary':'#FFFFFA', 'highlight':'#FFFFFA'},

    // red
    {'bg':'#E3032B', 'primary':'#fdffff', 'highlight':'#fdffff', 'name':'Candy Apple Red'},
    //{'bg':'#E3032B', 'primary':'#FCF5EB', 'highlight':'#FCF5EB'},
    //#B10F2E

    // black GOOD
    {'bg':'#392B24', 'primary':'#f9f0de', 'highlight':'#f9f0de', 'name':'Bistre'},

    // tan
    //{'bg':'#927154', 'primary':'#f9f0de', 'highlight':'#f9f0de'},

    // orange nice
    {'bg':'#e94d26', 'primary':'#f9f0de', 'highlight':'#f9f0de', 'name':'Flame'},

    // green
    {'bg':'#023f36', 'primary':'#f9f0de', 'highlight':'#f9f0de', 'name':'MSU Green'},

    // purple
    //{'bg':'#412147', 'primary':'#f9f0de', 'highlight':'#f9f0de'},

    // red alt
    {'bg':'#a6243c', 'primary':'#f9f0de', 'highlight':'#f9f0de', 'name':'Vivid Burgundy'},
     
    // blue
    //{'bg':'#2a70ae', 'primary':'#FFFFFA', 'highlight':'#FFFFFA'},
    {'bg':'#0B3954', 'primary':'#FFFAEF', 'highlight':'#FFFAEF', 'name':'Prussian Blue'},

    // darker red
    //{'bg':'#D90368', 'primary':'#FFFAEF', 'highlight':'#FFFAEF'},
    //{'bg':'#870B39', 'primary':'#FFFDF8', 'highlight':'#FFFDF8'},
    //{'bg':'#6A041D', 'primary':'#FFFDF8', 'highlight':'#FFFDF8'},

    // bright blue?
    {'bg':'#0071E9', 'primary':'#FFFDF8', 'highlight':'#FFFDF8', 'name':'Bright Navy Blue'},

    // lighter blue
    //{'bg':'#0072BB', 'primary':'#FFFAEF', 'highlight':'#FFFAEF'},


    // dark magenta. find a good cream match
    //{'bg':'#5F0F40', 'primary':'#FDF6EC', 'highlight':'#FDF6EC'},

    //{'bg':'#FF206E', 'primary':'#FDF6EC', 'highlight':'#FDF6EC'},

    // green
    //{'bg':'#005742', 'primary':'#F7F7FF', 'highlight':'#F7F7FF'},
    //{'bg':'#0B5351', 'primary':'#FFFAF1', 'highlight':'#FFFAF1'},


    // teal
    //{'bg':'#17BEBB', 'primary':'#F8F4E3', 'highlight':'#F9B9F2'},

    // nope

    // pink
    //{'bg':'#EA638C', 'primary':'#FBFEF9', 'highlight':'#FBFEF9'},

    //{'bg':'#f9f0de', 'primary':'#fffffa', 'highlight':'#2a70ae'},
    ];

var weightedFillModes = [
    
    // original design that i liked
    'solidysolidx', 0.20,

    // best 2. super keepers.
    'solidyblankx', 0.20,
    'blankysolidx', 0.20,

    // interesting. keep. nah drop it.
    //'blankyblankx', 0.10,

    // kinda meh. pattern clashes w blank smoothness
    ////'blankypatternx', 0.10,
    ////'patternyblankx', 0.10,

    // keepers!!!
    'vertpatternypatternx', 0.20,
    'patternyvertpatternx', 0.20,
    
    // TODO: solid + pattern

];

var denyPatternNames = [
    'Trio A',
    'Trio B',
    'Half and Half B',
    'Half and Half A',
    'Two-Thirds A',
    'Two-Thirds B',
    'Center',
    'None'
];
var denyPatterns = [


    // 3 lines
    function(i,j) {
        if (i >= 18 && i <= 37) {
            return false;
        } 
        else if (i >= 56 && i <= 75) {
            return false;
        }
        else {
            return true;
        }
    },


    // 3 lines
    function(i,j) {
        if (j >= 18 && j <= 37) {
            return false;
        } 
        else if (j >= 56 && j <= 75) {
            return false;
        }
        else {
            return true;
        }
    },

    // cut in half, 50/50
    function(i,j) {
        if (j >= 37 && j <= 56) {
            return false;
        } 
        else {
            return true;
        }
    },

    // cut in half, 50/50
    function(i,j) {
        if (i >= 37 && i <= 56) {
            return false;
        } 
        else {
            return true;
        }
    },


    // cut in 2, 1/3 2/3
    function(i,j) {
        if (i >= 15 && i <= 34) {
            return false;
        } 
        else {
            return true;
        }
    },

    // cut in 2, 1/3 2/3
    function(i,j) {
        if (j >= 15 && j <= 34) {
            return false;
        } 
        else {
            return true;
        }
    },

    // hole in center
    function(i,j) {
        if (j >= 27 && j <= 66 && i >= 27 && i <= 66) {
            return false;
        } 
        else {
            return true;
        }
    },

/*
    // bigger hole in center
    function(i,j) {
        if (j >= 17 && j <= 76 && i >= 17 && i <= 76) {
            return false;
        } 
        else {
            return true;
        }
    },
    */

    function(i,j) {
        return true;
    },
];

class Random {
    constructor() {}
    random_dec() {
        return fxrand()
    }
    random_num(r, e) {
        return r + (e - r) * this.random_dec()
    }
    random_int(r, e) {
        return Math.floor(this.random_num(r, e + 1))
    }
    random_choice(r) {
        return r[this.random_int(0, r.length - 1)]
    }
    random_bool(r) {
        return this.random_dec() < r
    }
}

// globals
var rbw = 2;
var globalSum = 0;
var globalNumVisited = 0;
var R = new Random;
var M;
var W;
var H;
//var borderColor = '#FEF6E4';
var borderColor = '#34000a';
var borderWidth;
var paletteIndex;
var denyPatternIndex;
var buildings = [];
var floatMargin = .0001;
var maxHeight = 30;
var maxRatio = 2;
var numPyramids = 0;
var WFM;

// building fill modes

// 1. all clean solid
// 2. mix of solids, striped, and blank: y is window stripe, x is blank
// 3. mix of solids, striped, and blank: x is window stripe, y is blank
// 4. mix of solids and striped only?

//var grid = 54; // 60 buildings
var grid = 94; // 120 buildings
//var grid = 54; // 120 buildings
//var grid = 34; // scale down z when you get low grids. can have 3 "zoom" levels and hard code z values for each
//var grid = 40;

let y_values = {
    min: 1e6,
    max: 0
};

// all the state that needs to be set/initialized before calling setup for the first time
function init() {
    fxrand = sfc32(...hashes)

    globalSum = 0;

    buildings = [];
}

function setStroke(level) {
    var base = Math.min(Math.max(W/800, 0.5),2);
    //console.log('stroke base = ' + base);

    // level = 1 2 3
    if (level === 1) {
        strokeWeight(base);
    }
    else if (level === 2) {
        strokeWeight(base*2);
    }
    else if (level === 3) {
        strokeWeight(base*3);
    }
    else {
        strokeWeight(sw);
    }
}

init();

function setup() {

  randomSeed(fxrand());

  var h = window.innerHeight;
  //var w = h/1.2;
  //var w = h*1.618;
  var w = h*1;

  // flip it if window is narrow width
  if (window.innerWidth < w) {
    w = window.innerWidth;
    h = w;
  }
  W = w;
  H = h;

  //console.log('width ' + w);
  //console.log('height ' + h);

  numPyramids = 0;
  paletteIndex = pickIndex(mastercolors);
  denyPatternIndex = pickIndex(denyPatterns);
  WFM = wc(weightedFillModes);
  //WFM = 'smallsidefillwindow';
  //console.log('wfm = ' + WFM);

  if (od(0.9)) {
      maxHeight = 30;
  } else {
      maxHeight = 20;
  }
  //console.log('max height = ' + maxHeight);
    
  rbw = w/360;
  let num = 9;
  M = w/1260;

  let margin = w/(num+2);
  let block = margin;
  //console.log('block ' + block);
  //console.log('small dim ' + smalldim);

  createCanvas(w, h);

  //var smalldim =  Math.floor(Math.min(w, h));
  //console.log('small dim: ' + smalldim);
  //  I ve had to fuss with that on other projects too. Basically limit the canvas size slightly by a modulo of window size.
  // I tend to work in proportions, so dividing by 2, 4, 10, etc.

  // DEBUG
  background(mastercolors[paletteIndex].bg);
  //background('#0071E9');
   
  noStroke();
  //rect(w/2,w/2,w/10,w/10);
  
  // isometric view
  // lines are 30 degrees, 30 from other side flat, an vertical
  // have a 2d array that represents the floor
  // if you have a 1, then  draw a 3d cube at that location

  // draw the grid first
  // n x n

  // line patterns on each side of the cube
  // future block shapes
  // triangle towers
  // colors
   
  var hstart = .75*h;

  //var grid = 24;

  // MASTER
  // isometric drawing library

  // make a class out of it, grab any x,y for any x y z coordinate in the grid
  // pass in x axis angle (right), y axis angle (left)
  // then pass any coorindate, and get where you would draw the circle
   
  var strongLine = w/100;
  strokeWeight(strongLine);

  var iso = new Iso(Math.PI/6, Math.PI/6,.5*w,.5*w,.5*w,grid);
  //var iso = new Iso(Math.PI/6, Math.PI/12,w/2,w/2,w/2,grid);
  var shortList = [];

  // DEBUG
/*
  var db2 = new Building(70,60,4,4,4);
  iso.collidesWithExisting(db2);
  buildings.push(db2);
  var db1 = new Building(30,40,30,30,40);
  //shortList.push(new Building(1,8,2,1,3));

  if (!iso.collidesWithExisting(db1)) {
    console.log('no collision, adding 2nd building!');
    buildings.push(db1);
  }

  for (var i = 0; i < shortList.length; i++) {
      iso.drawBuilding(shortList[i]);
  }
  */
  // END DEBUG

  //console.log('# of buildings before = ' + buildings.length);
  //DEBUG
  buildings = [];


  //while (buildings.length <= 120) {
  //while (buildings.length <= 140) {

  var iterationsDone = 0;
  while (buildings.length <= 160) {
  //while (buildings.length <= 70) {
      subdivide(iso,0,0,grid,grid);
      //console.log('# of buildings after = ' + buildings.length);
      //triesLeft--;
      iterationsDone++;
      if (iterationsDone > 500) {
        break;
      }
  }


  // next section
  var numDrawn = 0;
  var shortList = [];
  for (var i = 0; i < buildings.length; i++) {
    //console.log(buildings[i]);
    iso.drawBuilding(buildings[i]);
    numDrawn++;
    shortList.push(buildings[i]);
    if (numDrawn >= 5) {
        //break;
    }
  }
  
  //console.log('short list = ' + shortList.length);

  // check every building vs every other building - do i intersect with you?
  for (var i = 0; i < shortList.length; i++) {
    for (var j = 1; j < shortList.length; j++) {
    //for (var j = i; j < shortList.length; j++) {
        if (i === j) {
            continue;
        }
        //console.log('compare i j = ' + i + ' ' + j);
        iso.collide(shortList[i], shortList[j]);
    }
  }

  
  // 10x10 floor subdivision algorithm
  // output the x,y of where every rectangle starts, and its size w x h x d
  // draw those rectangles

  // draw arbitrary blocks any width height depth


  setStroke(3);
  stroke(mastercolors[paletteIndex].highlight);

  borderWidth = h/30;
  drawLine(M,borderWidth,borderWidth,w-borderWidth,borderWidth);
  drawLine(M,borderWidth,h-borderWidth,w-borderWidth,h-borderWidth);
  drawLine(M,borderWidth,borderWidth,borderWidth,h-borderWidth);
  drawLine(M,w-borderWidth,borderWidth,w-borderWidth,h-borderWidth);

/*
  borderWidth = h/25;
  drawLine(M,borderWidth,borderWidth,w-borderWidth,borderWidth);
  drawLine(M,borderWidth,h-borderWidth,w-borderWidth,h-borderWidth);
  drawLine(M,borderWidth,borderWidth,borderWidth,h-borderWidth);
  drawLine(M,w-borderWidth,borderWidth,w-borderWidth,h-borderWidth);
  */

  /*
  fill(borderColor);
  noStroke();

  rect(0,0,w,borderWidth);
  rect(0,h-borderWidth,w,borderWidth);
  rect(0,0,borderWidth,h);
  rect(w-borderWidth,0,borderWidth,h);
  */

  var patternName;
  if (WFM == 'solidysolidx') {
      patternName = 'Solids and Solids';
  }
  else if (WFM == 'solidyblankx') {
      patternName = 'Solids and Blanks';
  }
  else if (WFM == 'blankysolidx') {
      patternName = 'Solids and Blanks';
  }
  else if (WFM == 'vertpatternypatternx') {
      patternName = 'Line Patterns';
  }
  else if (WFM == 'patternyvertpatternx') {
      patternName = 'Line Patterns';
  }

  options = {
    'Color': mastercolors[paletteIndex].name,
    'City Split': denyPatternNames[denyPatternIndex],
    'Max Building Height': (maxHeight == 30 ? 'High' : 'Low'),
    'Building Pattern': patternName,
    'Number of Pyramids': numPyramids
  }

  window.$fxhashFeatures = {
    ...options
  }
}

function subdivide(iso,sx,sy,lx,ly) {
    if (lx === 0 || ly === 0) {
        return;
    }

    //console.log('enter = ' + lx + " " + ly);
    // either i just make the whole rectangle and return or i subdivide recurse
    var ratio;
    if (lx > ly) {
        ratio = lx / ly;
    } else {
        ratio = ly / lx;
    }
    //if ((lx === ly) && lx < 3) {
    if ((lx === ly) && lx < 5) {
        var lz = rint(16,maxHeight);
        var b = new Building(sx,sy,lx,ly,lz);

        if (!iso.collidesWithExisting(b)) {
            if (lx !== 1) {
            buildings.push(b);
            }
        } else {
            //console.log('did not add building, it would collide');
        }

    }
    else if ((lx === 1 || ly === 1) && ratio < 5) {
        //console.log('ratio 1 = ' + ratio);
        var lz = rint(1,maxHeight);
        var b = new Building(sx,sy,lx,ly,lz);

        if (!iso.collidesWithExisting(b)) {
            buildings.push(b);
        } else {
            //console.log('did not add building, it would collide');
        }

    } else if (ratio < 5 && ((lx < 3 && od(0.5)) || (ly < 3 && od(0.5)))) {
        //console.log('ratio 2 = ' + ratio);
        var lz = rint(1,maxHeight);
        var b = new Building(sx,sy,lx,ly,lz);

        if (!iso.collidesWithExisting(b)) {
            buildings.push(b);
        } else {
            //console.log('did not add building, it would collide');
        }
    } else {
        // x axis split or y?
        var xsplit = od(0.5);
        var ysplit = !xsplit;

        // where on the axisshould the split go?
        if (ly == 1 || xsplit) {
            // lx is 10
            // pick number 1 to 9 inc
            var picked = rint(1,lx);

            if (od(0.75)) {
                subdivide(iso,sx,sy,picked,ly);
            }
            if (od(0.75)) {
                subdivide(iso,sx+picked,sy,lx-picked,ly);
            }
        } else if (lx == 1 || ysplit) {
            var picked = rint(1,ly);

            if (od(0.75)) {
                subdivide(iso,sx,sy,lx,picked);
            }
            if (od(0.75)) {
                subdivide(iso,sx,sy+picked,lx,ly-picked);
            }
        }
    }
}
 
class Building {
    // origin point of this building. (location)
    sx;
    sy;

    // length along each axis
    lx;
    ly;
    lz;
     
    shape;

    constructor(sx,sy,lx,ly,lz) {
        this.sx = sx;
        this.sy = sy;
        this.lx = lx;
        this.ly = ly;
        this.lz = lz;
        this.shape = 'unspecified';
    }

    setShape(shape) {
        this.shape = shape;
    }
}

class Iso {
    xangle;
    yangle;

    xlen;
    ylen;
    zlen;
     
    startx;
    starty;

    grid;
     
    blocked;

    constructor(xangle,yangle,xlen,ylen,zlen,grid) {
        this.xangle = xangle;
        this.yangle = yangle;
        this.xlen = xlen;
        this.ylen = ylen;
        this.zlen = zlen;
        this.grid = grid;
         
        // draw axes
        //console.log('draw axes');
        this.startx = W/2;
        this.starty = .83*H;
        //circle(this.startx,this.starty,6);

        var xdx = xlen * Math.cos(xangle);
        var xdy = xlen * Math.sin(xangle);

        //console.log('ctor xdx = ' + xdx);
        //console.log('ctor xdy = ' + xdy);

        //circle(this.startx+xdx,this.starty-xdy,6);


        setStroke(2);
        stroke(mastercolors[paletteIndex].highlight);
        
        //var axesBuffer = H/30;

        //line(this.startx,this.starty,this.startx+xdx,this.starty-xdy,6);
        //line(this.startx,this.starty+axesBuffer,this.startx+xdx,this.starty-xdy+axesBuffer);

        var ydx = ylen * Math.cos(yangle);
        var ydy = ylen * Math.sin(yangle);

        //circle(this.startx-ydx,this.starty-ydy,6);
        //line(this.startx,this.starty,this.startx-ydx,this.starty-ydy,6);
        //line(this.startx,this.starty+axesBuffer,this.startx-ydx,this.starty-ydy+axesBuffer);

        this.blocked = [];
        for (var i = 0; i < grid; i++) {
            var a = [];
            for (var j = 0; j < grid; j++) {
            /*
                if (i >= 35 && i <= 55) {
                    a.push(false);
                } 
                else if (j >= 35 && j <= 55) {
                    a.push(false);
                }
                else {
                    a.push(true);
                }
                */

                if (grid >= 94) {
                    a.push(denyPatterns[denyPatternIndex](i,j));
                } else {
                    a.push(true);
                }

/*
                if (grid >= 94 && i >= 18 && i <= 37) {
                    a.push(false);
                } 
                else if (grid >= 94 && i >= 56 && i <= 75) {
                    a.push(false);
                }
                else {
                    a.push(true);
                }
                */

            }
            this.blocked.push(a);
        }
    }

    getDrawingPoint(ox,oy,oz) {
        // draw cirlce at the point. ignore z for now.

        var xhype = this.xlen * ox / this.grid; 
        var yhype = this.ylen * oy / this.grid; 

        var xdx = xhype * Math.cos(this.xangle);
        var xdy = xhype * Math.sin(this.xangle);

        var ydx = yhype * Math.cos(this.yangle);
        var ydy = yhype * Math.sin(this.yangle);

        var zdx = 0;
        var zdy = oz*this.zlen/this.grid;
        
        //console.log('oz = ' + oz); 
        //console.log('zlen = ' + this.zlen); 
        //console.log('grid = ' + this.grid); 
         
        return {'x':(this.startx+xdx-ydx), 'y':this.starty-xdy-ydy-zdy};
    }

    drawBuilding(b) {
        //var sw = Math.min(Math.max(W/800, 0.5),2);
        //strokeWeight(sw);
        setStroke(1);

        //stroke('#ff0000');
        //stroke('#375BA4');
        //stroke('#EAD7C6');

        // refactor this to be more high-level expressive
        // choose a shape for this block. could be block. could be pyramid. water tower - how to draw circle in isometric mode?
        // iterate over the relevant sides of a shape to draw a certain pattern on each side (xside,yside,top)
        
        // get normal block line segments
        var lines = this.getDrawLineSegmentsBuilding(b);
        var linesMap = this.getLinesMap(lines);

        // determine if we should draw a pattern on this one
        // is it 1x1?
        var xsidebigger = false;
        var ysidebigger = false;
        if (b.lx === b.ly && b.lx < 6 && b.shape != null && b.shape != 'block') {
            //console.log('square');

            var drawPyramid = true || (b.lx === 2);
            var drawCylinder = !drawPyramid;

            // draw a pyramid
            var pta;
            var ptb;
            var ptc;
            var ptd;
            var pttop;

            var pte;
            var ptf;
            var ptg;
            var pth;
            for (var i = 0; i < lines.length; i++) {
                if (lines[i].name === 'ab' || lines[i].name === 'ad') {
                    if (drawPyramid) {
                        // BUILDING LINES PYRAMID BASE
                        stroke(mastercolors[paletteIndex].highlight);
                        drawLine(M,lines[i].x1,lines[i].y1,lines[i].x2,lines[i].y2);
                    }
                    if (lines[i].name === 'ab') {
                        pta = {'x':lines[i].x1,'y':lines[i].y1};
                        ptb = {'x':lines[i].x2,'y':lines[i].y2};
                    }
                    if (lines[i].name === 'ad') {
                        ptd = {'x':lines[i].x2,'y':lines[i].y2};
                    }
                }
                //console.log('line name = ' + lines[i].name);
                if (lines[i].name === 'bc') {
                    ptc = {'x':lines[i].x2,'y':lines[i].y2};
                }

                if (lines[i].name === 'fg') {
                    pttop = {'x':lines[i].x2,'y':lines[i].y2};
                }

                //if (lines[i].name === 'ef' || lines[i].name === 'eh' || lines[i].name === 'fg' || lines[i].name === 'hg') {
                //    drawLine(M,lines[i].x1,lines[i].y1,lines[i].x2,lines[i].y2);
                //}
                if (lines[i].name === 'ef') {
                    pte = {'x':lines[i].x1,'y':lines[i].y1};
                    ptf = {'x':lines[i].x2,'y':lines[i].y2};
                } 
                else if (lines[i].name === 'eh') {
                    pth = {'x':lines[i].x2,'y':lines[i].y2};
                }
                if (lines[i].name === 'fg') {
                    ptg = {'x':lines[i].x2,'y':lines[i].y2};
                }
            }


            // pyramid tip calculation
            //drawLine(M,pte.x,pte.y,ptg.x,ptg.y);
            //drawLine(M,pth.x,pth.y,ptf.x,ptf.y);
            var lineeg = {'x1':pte.x,'y1':pte.y,'x2':ptg.x,'y2':ptg.y};
            var linehf = {'x1':pth.x,'y1':pth.y,'x2':ptf.x,'y2':ptf.y};
            var pci = this.segmentsIntersect(lineeg,linehf);

            //if (b.lx !== 1) {
            if (drawPyramid) {
                if (pci.theyIntersect) {
                    numPyramids++;
                    //console.log('pyramid cross inter = ' + pci.interx);
                    //circle(pci.interx,pci.intery,6);
                     
                    if (WFM === 'solidyblankx') {
                        fill(mastercolors[paletteIndex].primary);
                        this.drawPyramidFillY(pta,ptd,ptb,pci);
                    } 
                    else if (WFM === 'blankysolidx') {
                        fill(mastercolors[paletteIndex].primary);
                        this.drawPyramidFillX(pta,ptd,ptb,pci);
                    }
                    // 50/50 fill x axis side of pyramid vs y axis side
                    // DEBUG
                    else if (od(0.5)) {
                        fill(mastercolors[paletteIndex].primary);

                        if (WFM === 'patternyvertpatternx') {
                            this.drawPyramidVertPatternX(b,pta,ptd,ptb,pci);
                        } 
                        else if (WFM === 'vertpatternypatternx') {
                            this.drawPyramidHorizPatternX(b,pta,ptd,ptb,pci,linesMap);
                        } 
                        else {
                            this.drawPyramidFillX(pta,ptd,ptb,pci);
                        }
                    } else {
                        fill(mastercolors[paletteIndex].primary);

                        if (WFM === 'vertpatternypatternx') {
                            this.drawPyramidVertPatternY(b,pta,ptd,ptb,pci);
                        } 
                        else if (WFM === 'patternyvertpatternx') {
                            this.drawPyramidHorizPatternY(b,pta,ptd,ptb,pci,linesMap);
                        } 
                        else {
                            this.drawPyramidFillY(pta,ptd,ptb,pci);
                        }

                    }
                }
            } else {
                // try cylinder logic here

                if (pci.theyIntersect) {
                    //console.log('pyramid cross inter = ' + pci.interx);
                    //circle(pci.interx,pci.intery,6);

                    // 3 vertical pyramid lines
                    //drawLine(M,pta.x,pta.y,pci.interx,pci.intery);
                    //drawLine(M,ptb.x,ptb.y,pci.interx,pci.intery);
                    //drawLine(M,ptd.x,ptd.y,pci.interx,pci.intery);
                    //circle(pci.interx,pci.intery,3);

                    //drawLine(M,pte.x,pte.y,ptg.x,ptg.y);
                    //drawLine(M,pth.x,pth.y,ptf.x,ptf.y);

                    // draw midpoints
                    // ef
                    /*
                    var lineef = this.getSegmentByName('ef',lines);
                    console.log(lineef);
                    // find midpont of ef DONE
                    var midxef = lineef.x1 + (lineef.x2 - lineef.x1)/2;
                    var midyef = lineef.y1 + (lineef.y2 - lineef.y1)/2;
                    circle(midxef,midyef,3);
                    */
                    var midef = this.getSegmentMidPoint('ef',lines);
                    var mideh = this.getSegmentMidPoint('eh',lines);
                    var midfg = this.getSegmentMidPoint('fg',lines);
                    var midhg = this.getSegmentMidPoint('hg',lines);
                     
                    // 4 part ellipse north south east west

                    // north part of ellipse
                    var distemidhg = this.distance(pte,midhg)*2;
                    var startAngle = this.getAngleForSegment({'x1':pte.x,'y1':pte.y,'x2':midhg.x,'y2':midhg.y});
                    var endAngle = this.getAngleForSegment({'x1':pte.x,'y1':pte.y,'x2':midfg.x,'y2':midfg.y});
                    //console.log('north part ellipse = ' + distemidhg);
                    //console.log('start angle = ' + startAngle);
                    //console.log('end angle = ' + startAngle);
                    this.drawPartialCircle(pte,distemidhg,startAngle,endAngle);
                    //this.drawPartialCircle(pta,distemidhg,startAngle,endAngle);

                    // south part of ellipse
                    var distgmidef = this.distance(ptg,midef)*2;
                    var startAngle = 0;
                    startAngle = this.getAngleForSegment({'x1':ptg.x,'y1':ptg.y,'x2':midef.x,'y2':midef.y});
                    endAngle = this.getAngleForSegment({'x1':ptg.x,'y1':ptg.y,'x2':mideh.x,'y2':mideh.y});
                    this.drawPartialCircle(ptg,distgmidef,startAngle,endAngle);
                    this.drawPartialCircle(ptc,distgmidef,startAngle,endAngle);

                    // guide lines for east west
                    var guide1 = {'x1':mideh.x,'y1':mideh.y,'x2':ptg.x,'y2':ptg.y};
                    //drawLineSeg(guide1);

                    var cylinderHeight = pta.y - pte.y;
                    var cyllefttop;
                    var cylrighttop;

                    var cylleftbtm;
                    var cylrightbtm;

                    var longdiag = {'x1':pth.x,'y1':pth.y,'x2':ptf.x,'y2':ptf.y};
                    //circle(pth.x,pth.y,20);
                    //circle(ptf.x,ptf.y,20);
                    var theyIntersectObj = this.segmentsIntersect(guide1,longdiag);
                    //console.log('guide intersect = ' + theyIntersectObj.theyIntersect);
                    if (theyIntersectObj.theyIntersect) {
                        //circle(theyIntersectObj.interx, theyIntersectObj.intery,10);
                        var ptinter1 = {'x':theyIntersectObj.interx,'y':theyIntersectObj.intery};

                        // west part of ellipse
                        var distp = this.distance(ptinter1,mideh);
                        var startAngle = 0;
                        startAngle = this.getAngleForSegment({'x1':ptinter1.x,'y1':ptinter1.y,'x2':mideh.x,'y2':mideh.y});
                        endAngle = this.getAngleForSegment({'x1':ptinter1.x,'y1':ptinter1.y,'x2':midhg.x,'y2':midhg.y});
                        this.drawPartialCircle(ptinter1,distp*2,startAngle,endAngle);
                        var ptbtminter1 = {'x':ptinter1.x,'y':(ptinter1.y+cylinderHeight)};
                        this.drawPartialCircle(ptbtminter1,distp*2,startAngle,Math.PI);
                        // left top vertical line
                        cyllefttop = {'x':(ptinter1.x-distp),'y':ptinter1.y};
                        cylleftbtm = {'x':cyllefttop.x,'y':cyllefttop.y+cylinderHeight};
                        //circle(cyllefttop.x,cyllefttop.y,3);
                        //circle(cylleftbtm.x,cylleftbtm.y,3);
                        drawLinePoints(cyllefttop,cylleftbtm);
                    }

                    var guide2 = {'x1':midfg.x,'y1':midfg.y,'x2':pte.x,'y2':pte.y};
                    //drawLineSeg(guide2);

                    theyIntersectObj = this.segmentsIntersect(guide2,longdiag);
                    //console.log('guide 2intersect = ' + theyIntersectObj.theyIntersect);
                    if (theyIntersectObj.theyIntersect) {
                        //circle(theyIntersectObj.interx, theyIntersectObj.intery,10);
                        var ptinter2 = {'x':theyIntersectObj.interx,'y':theyIntersectObj.intery};

                        // east part of ellipse
                        var distp = this.distance(ptinter2,midfg);
                        var startAngle = 0;
                        startAngle = this.getAngleForSegment({'x1':ptinter2.x,'y1':ptinter2.y,'x2':midfg.x,'y2':midfg.y});
                        endAngle = this.getAngleForSegment({'x1':ptinter2.x,'y1':ptinter2.y,'x2':midef.x,'y2':midef.y});
                        this.drawPartialCircle(ptinter2,distp*2,startAngle,endAngle);
                        var ptbtminter2 = {'x':ptinter2.x,'y':(ptinter2.y+cylinderHeight)};
                        this.drawPartialCircle(ptbtminter2,distp*2,0,endAngle);

                        // left top vertical line
                        cylrighttop = {'x':(ptinter2.x+distp),'y':ptinter2.y};
                        cylrightbtm = {'x':cylrighttop.x,'y':cylrighttop.y+cylinderHeight};
                        //circle(cylrighttop.x,cylrighttop.y,3);
                        //circle(cylrightbtm.x,cylrightbtm.y,3);
                        drawLinePoints(cylrighttop,cylrightbtm);
                    }
                }
                /*

                console.log('1x1 !');
                // draw x's up the thing

                var lines = this.getDrawLineSegmentsBuilding(b);
                var startYPattern;
                var endYPattern;
                for (var i = 0; i < lines.length; i++) {
                    if (lines[i].name === 'ad') {
                        endYPattern = lines[i];
                        //drawLine(M,lines[i].x1,lines[i].y1-hashsep,lines[i].x2,lines[i].y2-hashsep);
                    }
                    if (lines[i].name === 'eh') {
                        startYPattern = lines[i];
                    }
                    if (lines[i].draw) {
                        //drawLine(M,lines[i].x1,lines[i].y1,lines[i].x2,lines[i].y2);
                    }
                }
                // draw patterns
                var hashstep = W/(2*grid);
                var delta = 0;
                console.log('start y pat = ' + startYPattern.y1);
                console.log('end y pat = ' + endYPattern.y1);
                var prevline = null;
                for (var draw = 0; (startYPattern.y1+draw) < endYPattern.y1; draw += hashstep) {
                    var line = startYPattern;
                    var currentline = {'x1':line.x1,'y1':(line.y1+draw),'x2':line.x2,'y2':(line.y2+draw)};
                    //drawLine(M,currentline.x1,currentline.y1,currentline.x2,currentline.y2);

                    if (prevline != null) {
                        //drawLine(M,prevline.x1,prevline.y1,currentline.x2,currentline.y2);
                        //drawLine(M,prevline.x2,prevline.y2,currentline.x1,currentline.y1);
                    }

                    prevline = currentline;
                }
                if (prevline != null) {
                    //drawLine(M,prevline.x1,prevline.y1,endYPattern.x2,endYPattern.y2);
                    //drawLine(M,prevline.x2,prevline.y2,endYPattern.x1,endYPattern.y1);
                }
                */

            }
        }
        else {
            // which side is longer x or y?
            if (b.lx > b.ly) {
                //console.log('fair game to draw pattern, x side longer');
                xsidebigger = true;
            } else {
                //console.log('fair game to draw pattern, y side longer');
                ysidebigger = true;
            }


            //console.log('draw building ' + b.sx);
            //this.drawBlock(b.sx,b.sy,0,b.lx,b.ly,b.lz);
            //var lines = this.getDrawLineSegmentsBuilding(b);
            var startYPattern;
            var endYPattern;
            for (var i = 0; i < lines.length; i++) {
                if (ysidebigger && lines[i].name === 'ad') {
                    endYPattern = lines[i];
                    //drawLine(M,lines[i].x1,lines[i].y1-hashsep,lines[i].x2,lines[i].y2-hashsep);
                }
                if (ysidebigger && lines[i].name === 'eh') {
                    startYPattern = lines[i];
                }
                if (lines[i].draw) {
                    // BUILDING LINES
                    stroke(mastercolors[paletteIndex].highlight);
                    drawLine(M,lines[i].x1,lines[i].y1,lines[i].x2,lines[i].y2);
                }
            }

            var linead = linesMap.ad;
            var lineeh = linesMap.eh;

            var lineab = linesMap.ab;
            var lineef = linesMap.ef;

            var linehg = linesMap.hg;

            // how should we draw this building? fill mode dictates
            if (WFM === 'solidyblankx') {
                fill(mastercolors[paletteIndex].primary);
                this.drawSolidY(linead,lineeh);
                //this.drawSolidX(lineab,lineef);
                this.drawSolidZ(lineef,linehg);

            } 
            else if (WFM === 'vertpatternypatternx') {
                fill(mastercolors[paletteIndex].primary);
                if (ysidebigger) {
                    this.drawWindowPattern3Y(b,linesMap);
                } else {
                    this.drawWindowPattern2X(b,linesMap.ab);
                }
                this.drawSolidZ(lineef,linehg);
            } 

            else if (WFM === 'patternyvertpatternx') {
                fill(mastercolors[paletteIndex].primary);
                if (ysidebigger) {
                    this.drawWindowPattern2Y(b,linesMap.ad);
                    //this.drawWindowPattern3Y(b,linesMap);
                } else {
                    this.drawWindowPattern3X(b,linesMap);
                }
                this.drawSolidZ(lineef,linehg);
            } 


            else if (WFM === 'blankysolidx') {
                fill(mastercolors[paletteIndex].primary);
                this.drawSolidX(lineab,lineef);
                this.drawSolidZ(lineef,linehg);
            } 
            else if (WFM === 'blankypatternx') {
                fill(mastercolors[paletteIndex].primary);
                this.drawSolidZ(lineef,linehg);

                if (xsidebigger) {
                    fill(mastercolors[paletteIndex].primary);
                    this.drawWindowPattern2X(b,linesMap.ab);
                } else {
                    this.drawSolidX(lineab,lineef);
                }
            }
            else if (WFM === 'patternyblankx') {
                fill(mastercolors[paletteIndex].primary);
                this.drawSolidZ(lineef,linehg);
                if (ysidebigger) {
                    fill(mastercolors[paletteIndex].primary);
                    this.drawWindowPattern2Y(b,linesMap.ad);
                } else {
                    this.drawSolidY(linead,lineeh);
                }
            } 
            else if (WFM === 'patternypatternx') {
                fill(mastercolors[paletteIndex].primary);
                this.drawSolidZ(lineef,linehg);
                if (ysidebigger) {
                    fill(mastercolors[paletteIndex].primary);
                    this.drawWindowPattern2Y(b,linesMap.ad);
                } else {
                    fill(mastercolors[paletteIndex].primary);
                    this.drawWindowPattern2X(b,linesMap.ab);
                }
            } 
            else {

                if (ysidebigger) {
                /*
                    // draw patterns
                    var hashstep = W/(2*grid);
                    var delta = 0;
                    //console.log('start y pat = ' + startYPattern.y1);
                    //console.log('end y pat = ' + endYPattern.y1);
                    for (var draw = 0; (startYPattern.y1+draw) < endYPattern.y1; draw += hashstep) {
                        var line = startYPattern;
                        drawLine(M,line.x1,line.y1+draw,line.x2,line.y2+draw);
                    }
                    */


                    fill(mastercolors[paletteIndex].primary);

                    if (WFM === 'largesidefill' || WFM === 'solidysolidx') {
                        this.drawSolidY(linead,lineeh);
                    }
                    else if (WFM === 'blankyblankx' || 'smallsidefillwindowx') {
                        this.drawSolidX(lineab,lineef);

                        if (WFM === 'smallsidefillwindowx') {
                            // find midpoint between a and b
                            var linead = linesMap.ad;
                            var midad = {'x': linead.x2 + (linead.x1-linead.x2) / 2.0, 'y': linead.y2 + (linead.y1-linead.y2)/2.0};
                            //fill('#00ff00');
                            fill(mastercolors[paletteIndex].primary);

                            //console.log('mid ad ' + midad.x);
                            //console.log('mid ad ' + midad.y);

                            //circle(midad.x,midad.y,3);
                            //drawLine(M,midad.x,midad.y,midad.x,midad.y-W/10);
                            //this.drawWindowPattern2Y(b,linead,midad);
                            //this.drawSolidY(linead,lineeh);
                        }


                    }

/*
                    if (b.lz >= 10 && b.lz % 2 == 0) {
                        if (WFM === 'mixx') {
                            this.drawWindowPatternY(b,linead);
                        } 
                        else if (WFM === 'largesidefill') {
                            this.drawSolidY(linead,lineeh);
                        }
                    } else {
                        this.drawSolidY(linead,lineeh);
                    }
                    */
                }

                if (xsidebigger) {

                    fill(mastercolors[paletteIndex].primary);
                    if (WFM === 'largesidefill' || WFM === 'solidysolidx') {
                        this.drawSolidX(lineab,lineef);
                    }
                    else if (WFM === 'blankyblankx' || 'smallsidefillwindowx') {
                        this.drawSolidY(linead,lineeh);

                        if (WFM === 'smallsidefillwindowx') {
                            fill(mastercolors[paletteIndex].primary);
                            this.drawWindowPattern2X(b,linesMap.ab);
                        }
                    }
/*
                    if (b.lz >= 10 && b.lz % 2 == 0) {
                        if (WFM === 'mixy') {
                            this.drawWindowPatternX(b,lineab);
                        }
                        else if (WFM === 'largesidefill') {
                            this.drawSolidX(lineab,lineef);
                        }
                    } else {
                        this.drawSolidX(lineab,lineef);
                    }
                    */
                }

                if (WFM !== 'solidysolidx') {
                    fill(mastercolors[paletteIndex].primary);
                    this.drawSolidZ(lineef,linehg);
                }
            }
        }
    }

    drawPyramidVertPatternY(b,ptcenter,ptleft,ptright,pttop) {
        stroke(mastercolors[paletteIndex].highlight);

        for (var i = 0; i <= b.ly; i+=.5) {
            var pta = this.getDrawingPoint(b.sx,b.sy+i,0);
            //circle(pta.x,pta.y,3);
            //circle(pttop.x,pttop.y,6);
            drawLine(M, pta.x,pta.y,pttop.interx,pttop.intery);
        }

        drawLine(M,ptright.x,ptright.y,pttop.interx,pttop.intery);
    }

    drawPyramidHorizPatternY(b,ptcenter,ptleft,ptright,pttop,linesMap) {

        var linead = linesMap.ad;

        // start at a. go up 0 to lz, and get the drawing point
        //var aminusdyaxis = linead.y1 - linead.y2;
        //var aminusmidyaxis = linead.y1 - midad.y;

        var aminusdyaxis = linead.y1 - linead.y2;


        var prevleft = {'x':linead.x2,'y':linead.y2};;
        var prevright = {'x':linead.x1,'y':linead.y1};;

        var pline = {'x1':ptleft.x,'y1':ptleft.y,'x2':pttop.interx,'y2':pttop.intery};
        var currentright = null;
        for (var i = 0; i <= b.lz; i+=.5) {
            var pta = this.getDrawingPoint(b.sx,b.sy,i);

            currentright = {'x':pta.x,'y':pta.y};
            var currentleft = {'x':linead.x2,'y':(pta.y-aminusdyaxis)};

            //circle(currentleft.x,currentleft.y,3);
            //circle(currentright.x,currentright.y,3);

            var hline = {'x1':currentright.x,'y1':currentright.y,'x2':currentleft.x,'y2':currentleft.y};
            var pci = this.segmentsIntersect(hline,pline);
            //console.log('horiz y inter? = ' + pci.theyIntersect);
            if (pci.theyIntersect) {
                drawLine(M,currentright.x,currentright.y,pci.interx,pci.intery);
            }


            //drawLine(M,currentleft.x,currentleft.y,currentright.x,currentright.y);

            prevright = currentright;
            prevleft = currentleft;
        }

        drawLine(M,ptleft.x,ptleft.y,pttop.interx,pttop.intery);
        drawLine(M,ptright.x,ptright.y,pttop.interx,pttop.intery);
        drawLine(M,ptcenter.x,ptcenter.y,pttop.interx,pttop.intery);
    }

    drawPyramidHorizPatternX(b,ptcenter,ptleft,ptright,pttop,linesMap) {

        var lineab = linesMap.ab;

        var aminusbyaxis = lineab.y1 - lineab.y2;

        var prevright = {'x':lineab.x2,'y':lineab.y2};
        var prevleft = {'x':lineab.x1,'y':lineab.y1};

        var pline = {'x1':ptright.x,'y1':ptright.y,'x2':pttop.interx,'y2':pttop.intery};
        var currentleft = null;
        //for (var i = 0; (currentleft == null || (currentleft.y - pttop.intery) > W/100); i+=.5) {
        for (var i = 0; i < b.lz; i+=.5) {
            var pta = this.getDrawingPoint(b.sx,b.sy,i);

            currentleft = {'x':pta.x,'y':pta.y};
            var currentright = {'x':lineab.x2,'y':(pta.y-aminusbyaxis)};
            //circle(currentleft.x,currentleft.y,3);
            //circle(currentright.x,currentright.y,3);
            var hline = {'x1':currentleft.x,'y1':currentleft.y,'x2':currentright.x,'y2':currentright.y};
            var pci = this.segmentsIntersect(hline,pline);
            //console.log('horiz inter? = ' + pci.theyIntersect);
            if (pci.theyIntersect) {
                drawLine(M,currentleft.x,currentleft.y,pci.interx,pci.intery);
                //drawLine(M,currentleft.x,currentleft.y,currentright.x,currentright.y);
            }

            prevright = currentright;
            prevleft = currentleft;

            //console.log('DEBUG1 ' + currentleft.y);
            //console.log('DEBUG2 ' + pttop.intery);
        }
        drawLine(M,ptleft.x,ptleft.y,pttop.interx,pttop.intery);
        drawLine(M,ptright.x,ptright.y,pttop.interx,pttop.intery);
        drawLine(M,ptcenter.x,ptcenter.y,pttop.interx,pttop.intery);
    }

    drawPyramidVertPatternX(b,ptcenter,ptleft,ptright,pttop) {
        //this.drawWindowPattern2Y(b,linesMap.ad);

        stroke(mastercolors[paletteIndex].highlight);
        //drawLine(M, midad.x,midad.y,mideh.x,mideh.y);

        for (var i = 0; i <= b.lx; i+=.5) {
            var pta = this.getDrawingPoint(b.sx+i,b.sy,0);
            //circle(pta.x,pta.y,3);
            //circle(pttop.x,pttop.y,6);
            drawLine(M, pta.x,pta.y,pttop.interx,pttop.intery);
        }
        drawLine(M,ptleft.x,ptleft.y,pttop.interx,pttop.intery);
    }

    drawPyramidFillX(ptcenter,ptleft,ptright,pttop) {

        beginShape();
        vertex(ptcenter.x,ptcenter.y);
        vertex(ptright.x,ptright.y);
        vertex(pttop.interx,pttop.intery);
        endShape(CLOSE);

        // BUILDING LINES PYRAMIND SIDE
        stroke(mastercolors[paletteIndex].highlight);
        drawLine(M,ptleft.x,ptleft.y,pttop.interx,pttop.intery);

    }

    drawPyramidFillY(ptcenter,ptleft,ptright,pttop) {
        beginShape();
        vertex(ptcenter.x,ptcenter.y);
        vertex(ptleft.x,ptleft.y);
        vertex(pttop.interx,pttop.intery);
        endShape(CLOSE);

        // BUILDING LINES PYRAMIND SIDE
        stroke(mastercolors[paletteIndex].highlight);
        drawLine(M,ptright.x,ptright.y,pttop.interx,pttop.intery);

    }

    drawSolidX(lineab,lineef) {
        beginShape();
        vertex(lineab.x1,lineab.y1);
        vertex(lineab.x2,lineab.y2);
        vertex(lineef.x2,lineef.y2);
        vertex(lineef.x1,lineef.y1);
        endShape(CLOSE);
    }

    drawSolidY(linead,lineeh) {
        beginShape();
        vertex(linead.x1,linead.y1);
        vertex(linead.x2,linead.y2);
        vertex(lineeh.x2,lineeh.y2);
        vertex(lineeh.x1,lineeh.y1);
        endShape(CLOSE);
    }

    drawSolidZ(lineef,linehg) {
        beginShape();
        vertex(lineef.x1,lineef.y1);
        vertex(lineef.x2,lineef.y2);
        vertex(linehg.x2,linehg.y2);
        vertex(linehg.x1,linehg.y1);
        endShape(CLOSE);
    }

    drawWindowPattern3X(b,linesMap) {
        if (b.lz < 2) {
            return;
        }
        //this.drawWindowPattern2Y(b,linesMap.ad);

        var lineab = linesMap.ab;
        var midab = {'x': lineab.x2 + (lineab.x1-lineab.x2) / 2.0, 'y': lineab.y2 + (lineab.y1-lineab.y2)/2.0};

        var lineef = linesMap.ef;
        var midef = {'x': lineef.x2 + (lineef.x1-lineef.x2) / 2.0, 'y': lineef.y2 + (lineef.y1-lineef.y2)/2.0};

        stroke(mastercolors[paletteIndex].highlight);
        //drawLine(M, midad.x,midad.y,mideh.x,mideh.y);


        for (var i = 0; i <= b.lx; i+=.5) {
            var pta = this.getDrawingPoint(b.sx+i,b.sy,0);
            var pte = this.getDrawingPoint(b.sx+i,b.sy,b.lz);
            //circle(pta.x,pta.y,3);
            //circle(pte.x,pte.y,3);
            drawLine(M, pta.x,pta.y,pte.x,pte.y);
        }

    }

    drawWindowPattern3Y(b,linesMap) {

        if (b.lz < 2) {
            return;
        }
        //this.drawWindowPattern2Y(b,linesMap.ad);

        var linead = linesMap.ad;
        var midad = {'x': linead.x2 + (linead.x1-linead.x2) / 2.0, 'y': linead.y2 + (linead.y1-linead.y2)/2.0};

        var lineeh = linesMap.eh;
        var mideh = {'x': lineeh.x2 + (lineeh.x1-lineeh.x2) / 2.0, 'y': lineeh.y2 + (lineeh.y1-lineeh.y2)/2.0};

        stroke(mastercolors[paletteIndex].highlight);
        //drawLine(M, midad.x,midad.y,mideh.x,mideh.y);


        for (var i = 0; i <= b.ly; i+=.5) {
            var pta = this.getDrawingPoint(b.sx,b.sy+i,0);
            var pte = this.getDrawingPoint(b.sx,b.sy+i,b.lz);
            //circle(pta.x,pta.y,3);
            //circle(pte.x,pte.y,3);
            drawLine(M, pta.x,pta.y,pte.x,pte.y);
        }
    }

    drawWindowPattern2Y(b,linead) {
        if (b.lz < 2) {
            return;
        }

        var midad = {'x': linead.x2 + (linead.x1-linead.x2) / 2.0, 'y': linead.y2 + (linead.y1-linead.y2)/2.0};

        // start at a. go up 0 to lz, and get the drawing point
        var aminusdyaxis = linead.y1 - linead.y2;
        var aminusmidyaxis = linead.y1 - midad.y;


        var prevright = {'x':linead.x1,'y':linead.y1};;
        var prevleft = {'x':linead.x2,'y':linead.y2};;
        var prevmid = {'x':midad.x,'y':midad.y};;

        for (var i = 0; i <= b.lz; i+=.5) {
            var pta = this.getDrawingPoint(b.sx,b.sy,i);

            var currentright = {'x':pta.x,'y':pta.y};
            var currentleft = {'x':linead.x2,'y':(pta.y-aminusdyaxis)};
            var currentmid = {'x':midad.x,'y':(pta.y-aminusmidyaxis)};

            //circle(currentleft.x,currentleft.y,3);
            //circle(currentright.x,currentright.y,3);
            //circle(currentmid.x,currentmid.y,3);

            drawLine(M,currentleft.x,currentleft.y,currentright.x,currentright.y);

            prevright = currentright;
            prevleft = currentleft;
            prevmid = currentmid;
        }
    }


    drawWindowPattern2X(b,lineab) {
        if (b.lz < 2) {
            return;
        }

        var midab = {'x': lineab.x1 + (lineab.x2-lineab.x1) / 2.0, 'y': lineab.y2 + (lineab.y1-lineab.y2)/2.0};

        var aminusbyaxis = lineab.y1 - lineab.y2;
        var aminusmidyaxis = lineab.y1 - midab.y;

        var prevright = {'x':lineab.x2,'y':lineab.y2};
        var prevleft = {'x':lineab.x1,'y':lineab.y1};
        var prevmid = {'x':midab.x,'y':midab.y};

        setStroke(1);
        for (var i = 0; i <= b.lz; i+=.5) {
            var pta = this.getDrawingPoint(b.sx,b.sy,i);

            var currentleft = {'x':pta.x,'y':pta.y};
            var currentright = {'x':lineab.x2,'y':(pta.y-aminusbyaxis)};
            var currentmid = {'x':midab.x,'y':(pta.y-aminusmidyaxis)};
            //circle(currentleft.x,currentleft.y,3);
            //circle(currentright.x,currentright.y,3);
            //circle(currentmid.x,currentmid.y,3);

            drawLine(M,currentleft.x,currentleft.y,currentright.x,currentright.y);

            prevright = currentright;
            prevleft = currentleft;
            prevmid = currentmid;
        }
        noStroke();
    }

    drawWindowPatternX(b,lineab) {
        var aminusbyaxis = lineab.y1 - lineab.y2;

        var prevright = {'x':lineab.x2,'y':lineab.y2};;
        var prevleft = {'x':lineab.x1,'y':lineab.y1};;
        var alternate = true;
        for (var i = 0; i <= b.lz; i+=1) {
            var pta = this.getDrawingPoint(b.sx,b.sy,i);

            var currentleft = {'x':pta.x,'y':pta.y};
            var currentright = {'x':lineab.x2,'y':(pta.y-aminusbyaxis)};
            //circle(currentleft.x,currentleft.y,3);
            //circle(currentright.x,currentright.y,3);

            if (alternate) {
                beginShape();
                vertex(prevright.x,prevright.y);
                vertex(prevleft.x,prevleft.y);
                vertex(currentleft.x,currentleft.y);
                vertex(currentright.x,currentright.y);
                endShape(CLOSE);
            }

            alternate = !alternate;
            prevright = currentright;
            prevleft = currentleft;
        }
    }

    drawWindowPatternY(b,linead) {

        // start at a. go up 0 to lz, and get the drawing point
        var aminusdyaxis = linead.y1 - linead.y2;
        var prevright = {'x':linead.x1,'y':linead.y1};;
        var prevleft = {'x':linead.x2,'y':linead.y2};;
        var alternate = true;
        for (var i = 0; i <= b.lz; i+=1) {
            var pta = this.getDrawingPoint(b.sx,b.sy,i);

            var currentright = {'x':pta.x,'y':pta.y};
            var currentleft = {'x':linead.x2,'y':(pta.y-aminusdyaxis)};

            if (alternate) {
                beginShape();
                vertex(prevright.x,prevright.y);
                vertex(prevleft.x,prevleft.y);
                vertex(currentleft.x,currentleft.y);
                vertex(currentright.x,currentright.y);
                endShape(CLOSE);
            }

            alternate = !alternate;
            prevright = currentright;
            prevleft = currentleft;
        }
    }

    getAngleForSegment(seg) {
        var xdiff = (seg.x2-seg.x1);
        var ydiff = (seg.y2-seg.y1);
        var angle = Math.atan(Math.abs(ydiff)/Math.abs(xdiff));
        //console.log('gafs seg.x2 = ' + seg.x2);
        //console.log('gafs seg.x1 = ' + seg.x1);
        //console.log('gafs seg.y2 = ' + seg.y2);
        //console.log('gafs seg.y1 = ' + seg.y1);
        //console.log('angle for seg ' + angle);
        if (xdiff < 0) {
            //console.log('draw from 180');
            if (ydiff < 0) {
                return (Math.PI + angle);
            } else {
                return (Math.PI - angle);
            }
        } else {
            //console.log('draw from 0');
            if (ydiff < 0) {
                return (2*Math.PI - angle);
            } else {
                return (angle);
            }
        }
    }

    distance(pt1,pt2) {
        return Math.sqrt(Math.pow(pt2.x-pt1.x,2) + Math.pow(pt2.y-pt1.y,2));
    }

    drawPartialCircle(center,radius,startAngle,endAngle) {
        noFill();
        //circle(center.x,center.y,10);
        //console.log('rad = ' + radius);
        arc(center.x,center.y,radius,radius,startAngle,endAngle);
    }
    
    getSegmentMidPoint(name,lines) {
        var seg = this.getSegmentByName(name,lines);

        // find midpont of ef DONE
        var midxef = seg.x1 + (seg.x2 - seg.x1)/2;
        var midyef = seg.y1 + (seg.y2 - seg.y1)/2;
        //circle(midxef,midyef,3);
        return {'x':midxef,'y':midyef};
    }

    getSegmentByName(name,lines) {
        for (var i = 0; i < lines.length; i++) {
            if (lines[i].name === name) {
                return lines[i];
            }
        }
        return null;
    }

    getDrawPointsBuilding(b) {
        return this.getDrawPoints(b.sx,b.sy,0,b.lx,b.ly,b.lz);
    }

    getDrawLineSegmentsBuilding(b) {
        var dp = this.getDrawPoints(b.sx,b.sy,0,b.lx,b.ly,b.lz);

        // TODO: return an array w all 9 line segments that need to be drawn. a line segment is just 2 points
        var lines = []; 

        // draw bottom
        lines.push({'x1':dp.ptsa.x, 'y1':dp.ptsa.y, 'x2':dp.ptsb.x, 'y2':dp.ptsb.y,'name':'ab','draw':true});
        lines.push({'x1':dp.ptsb.x, 'y1':dp.ptsb.y, 'x2':dp.ptsc.x, 'y2':dp.ptsc.y,'name':'bc','draw':false});
        lines.push({'x1':dp.ptsa.x, 'y1':dp.ptsa.y, 'x2':dp.ptsd.x, 'y2':dp.ptsd.y,'name':'ad','draw':true});
        //lines.push({'x1':dp.ptsd.x, 'y1':dp.ptsd.y, 'x2':dp.ptsc.x, 'y2',dp.ptsc.y});

        // draw top
        lines.push({'x1':dp.ptsae.x, 'y1':dp.ptsae.y, 'x2':dp.ptsbf.x, 'y2':dp.ptsbf.y,'name':'ef','draw':true});
        lines.push({'x1':dp.ptsbf.x, 'y1':dp.ptsbf.y, 'x2':dp.ptscg.x, 'y2':dp.ptscg.y,'name':'fg','draw':true});
        lines.push({'x1':dp.ptsae.x, 'y1':dp.ptsae.y, 'x2':dp.ptsdh.x, 'y2':dp.ptsdh.y,'name':'eh','draw':true});
        lines.push({'x1':dp.ptsdh.x, 'y1':dp.ptsdh.y, 'x2':dp.ptscg.x, 'y2':dp.ptscg.y,'name':'hg','draw':true});


        // 4 vertical lines to connect bottom to top
        lines.push({'x1':dp.ptsa.x, 'y1':dp.ptsa.y, 'x2':dp.ptsae.x, 'y2':dp.ptsae.y,'name':'ae','draw':true});
        lines.push({'x1':dp.ptsb.x, 'y1':dp.ptsb.y, 'x2':dp.ptsbf.x, 'y2':dp.ptsbf.y,'name':'bf','draw':true});
        //lines.push({'x1':dp.ptsc.x, 'y1':dp.ptsc.y, 'x2':dp.ptscg.x, 'y2':dp.ptscg.y});
        lines.push({'x1':dp.ptsd.x, 'y1':dp.ptsd.y, 'x2':dp.ptsdh.x, 'y2':dp.ptsdh.y,'name':'dh','draw':true});

        //console.log(lines);

        return lines;
    }

    getLinesMap(lines) {
        var map = {}
        for (var i = 0; i < lines.length; i++) {
            map[lines[i].name] = lines[i];
        }
        return map;
    }

    getDrawPoints(ox,oy,oz,xd,yd,zd) {

        var retval = {};

        retval.ptsa = this.getDrawingPoint(ox,oy,oz);

        retval.ptsb = this.getDrawingPoint(ox+xd,oy,oz);

        retval.ptsc = this.getDrawingPoint(ox+xd,oy+yd,oz);

        retval.ptsd = this.getDrawingPoint(ox,oy+yd,oz);

        retval.ptsae = this.getDrawingPoint(ox,oy,oz+zd);

        retval.ptsbf = this.getDrawingPoint(ox+xd,oy,oz+zd);

        retval.ptscg = this.getDrawingPoint(ox+xd,oy+yd,oz+zd);

        retval.ptsdh = this.getDrawingPoint(ox,oy+yd,oz+zd);

        return retval;
    }

    buildingAllowed(b1) {
        // DEBUG
        for (var i = b1.sx; i < (b1.sx + b1.lx); i++) {
            for (var j = b1.sy; j < (b1.sy + b1.ly); j++) {
                if (!this.blocked[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }
    
    collidesWithExisting(b1) {
        // also check if this spot is on deny list (this.blocked)
        // sx sy lx ly.
        if (!this.buildingAllowed(b1)) {
            //console.log('this square is blocked!');
            return true;
        }

        for (var i = 0; i < buildings.length; i++) {
            var collides = this.collide(b1,buildings[i]);
            if (collides) {
                return true;
            }
        }
        return false;
    }

    getRangeForBuildingLines(lines) {
        var range = {};

        var minx = Math.pow(2,10);
        var maxx = -1;;
        var miny = Math.pow(2,10);
        var maxy = -1;
        for (var i = 0; i < lines.length; i++) {
            if (lines[i].x1 < minx) {
                minx = lines[i].x1;
            }
            if (lines[i].x2 < minx) {
                minx = lines[i].x2;
            }
            if (lines[i].x1 > maxx) {
                maxx = lines[i].x1;
            }
            if (lines[i].x2 > maxx) {
                maxx = lines[i].x2;
            }

            if (lines[i].y1 < miny) {
                miny = lines[i].y1;
            }
            if (lines[i].y2 < miny) {
                miny = lines[i].y2;
            }
            if (lines[i].y1 > maxy) {
                maxy = lines[i].y1;
            }
            if (lines[i].y2 > maxy) {
                maxy = lines[i].y2;
            }
        }
        return {'minx':minx,'miny':miny,'maxx':maxx,'maxy':maxy};
    }
    
    isRangeAllInside(r1,r2) {
        if (r1.minx > r2.minx && r1.maxx < r2.maxx && r1.miny > r2.miny && r1.maxy < r2.maxy) {
            return true;
        } else {
            return false;
        }
    }

    anyPointsInsideRange(points,xmin,xmax,ymin,ymax) {
        for (var i = 0; i < points.length; i++) {
            if ((points[i].x > xmin || this.floatEquals(points[i].x,xmin)) && (points[i].x < xmax || this.floatEquals(points[i].x,xmax)) &&
                (points[i].y > ymin || this.floatEquals(points[i].y,ymin)) && (points[i].y < ymax || this.floatEquals(points[i].y,ymax))) {
                //circle(points[i].x,points[i].y,6);
                //console.log('point inside range = ' + points[i].x + ' ' + points[i].y + ' ' + xmin + ' ' + xmax + ' ' + ymin + ' ' + ymax);
                return true
            }
        }
        return false;
    }
     
    rectOverlap(x1,y1,x2,y2,p1,q1,p2,q2) {
        //circle(x1,y1,6);
        //circle(x2,y2,6);

        //circle(p1,q1,3);
        //circle(p2,q2,3);

        // for there to be no overlap, b1 has to be completely above b2, or completely to the right, or completely below, or completely to the left
        // remember yaxis is flipped in p5js

/*
        if (q1 < y2 ||
            y1 < q2 ||
            p1 > x2 ||
            x1 > p2) {
                return false;
            }
            */

        var buffer = W / 50;
        //circle(10,10,buffer);
        x1 -= buffer;
        y1 += buffer;
        x2 += buffer;
        y2 -= buffer;
        p1 -= buffer;
        q1 += buffer;
        p2 += buffer;
        q2 -= buffer;

        if (q1 < y2 || this.floatEquals(q1,y2) ||
            y1 < q2 || this.floatEquals(y1,q2) ||
            p1 > x2 || this.floatEquals(p1,x2) ||
            x1 > p2 || this.floatEquals(x1,p2)) {
                return false;
            }

        return true;
    }

    collide(b1,b2) {

        var b1points = this.getDrawPointsBuilding(b1);
        var b2points = this.getDrawPointsBuilding(b2);

/*
        var anyPoints1Inside2 = this.anyPointsInsideRange([b1points.ptsa,b1points.ptsb,b1points.ptsbf,b1points.ptscg,b1points.ptsdh,b1points.ptsd],b2points.ptsd.x,b2points.ptsb.x,b2points.ptscg.y,b2points.ptsa.y);
        //console.log('any 1 inside 2 ? = ' + anyPoints1Inside2);
        var anyPoints2Inside1 = this.anyPointsInsideRange([b2points.ptsa,b2points.ptsb,b2points.ptsbf,b2points.ptscg,b2points.ptsdh,b2points.ptsd],b1points.ptsd.x,b1points.ptsb.x,b1points.ptscg.y,b1points.ptsa.y);
        //console.log('any 2 inside 1 ? = ' + anyPoints2Inside1);
        if (!anyPoints1Inside2 && !anyPoints2Inside1) {
            return false;
        }
        */
        

        var overlap = this.rectOverlap(
            b1points.ptsd.x, b1points.ptsa.y, b1points.ptsb.x, b1points.ptscg.y,
            b2points.ptsd.x, b2points.ptsa.y, b2points.ptsb.x, b2points.ptscg.y
        );
        if (!overlap) {
            //console.log('no overlap rects');
            return false;
        }
            //console.log('yes overlap rects');

        //if all b1 points are outside of b2 = no collision
        //if all b2 points are outside of b1 = no collision

        // draw box width is b - d. height is g - a. does that collide?

        //console.log('check collision b1 vs b2');
        // NEXT resume here tuesday dec 6th 2022. you have the points. get 9 line segments from those points. compare 9 line segments vs 9 other building line segments. print if you think there is a collision!

        // what are all the line segments of b1 (just the 9 visible). as pairs of points
        var b1lines = this.getDrawLineSegmentsBuilding(b1);

        // what are all the line segments of b2 (just the 9 visible)
        var b2lines = this.getDrawLineSegmentsBuilding(b2);

         
        //console.log(b1lines);
        //console.log(b2lines);
        
        // compare each line segment of b1 vs each line segment of b2
        for (var i = 0; i < b1lines.length; i++) {
            for (var j = 0; j < b2lines.length; j++) {
                var theyIntersectObj = this.segmentsIntersect(b1lines[i], b2lines[j]);
                var theyIntersect = theyIntersectObj.theyIntersect;
                //console.log('did the segments intersect? = ' + b1lines[i].name + ' ' + b2lines[j].name + ' ' + theyIntersect);
                if (theyIntersect) {
                    return true;
                }
            }
        }


        // TODO: is one building completely inside another? that's a collision
        // get min x max x min y max y for each building
        //console.log('start range check');
        var rangeb1 = this.getRangeForBuildingLines(b1lines);
        //console.log('range b1 ' + rangeb1.minx);
        //console.log('range b1 ' + rangeb1.maxx);
        //console.log('range b1 ' + rangeb1.miny);
        //console.log('range b1 ' + rangeb1.maxy);

        var rangeb2 = this.getRangeForBuildingLines(b2lines);
        //console.log('range b2 ' + rangeb2.minx);
        //console.log('range b2 ' + rangeb2.maxx);
        //console.log('range b2 ' + rangeb2.miny);
        //console.log('range b2 ' + rangeb2.maxy);

        var r1insider2 = this.isRangeAllInside(rangeb1,rangeb2);
        var r2insider1 = this.isRangeAllInside(rangeb2,rangeb1);

        //console.log('r1 in r2 = ' + r1insider2);
        //console.log('r2 in r1 = ' + r2insider1);

        if (r1insider2 || r2insider1) {
            //console.log('shape inside another shape!');
            return true;
        }
        //console.log('end range check');

        //if rangeb2 is Not None && rangeb2.x1 > rangeb2

        return false;

        // write a method that takes line segment as xyxy and sees if it intersects another linesegment xyxy. and the intersection must occur in the correct range, 
    }

    // get slope method
    // inf slope method

    segmentsIntersect(seg1,seg2) {
        // what is equation of line l1?
        // get slope, then calc yinter
        // handle inf slope for vertical lines. it's just x = blah.
        // y2 - y1 / x2 - x1
        //
        var seg1xdiff = seg1.x2 - seg1.x1;
        var seg1ydiff = seg1.y2 - seg1.y1;
        var seg1infslope = Math.abs(seg1xdiff) < floatMargin;

        var seg2xdiff = seg2.x2 - seg2.x1;
        var seg2ydiff = seg2.y2 - seg2.y1;
        var seg2infslope = Math.abs(seg2xdiff) < floatMargin;

        // this if is correct DONE
        if (seg1infslope && seg2infslope) {
            //console.log('both vertical??? ' + seg1.name + ' ' + seg2.name);
            //circle(seg1.x1,seg1.y1,6);
            //circle(seg1.x2,seg1.y2,6);

            //circle(seg2.x1,seg2.y1,3);
            //circle(seg2.x2,seg2.y2,3);

            return {'theyIntersect':false};
        }

        //console.log('segl1xdiff = ' + seg1xdiff);
        //console.log('inf slope = ' + seg1infslope);
        var interx;
        var intery;

        if (!seg1infslope && seg2infslope) {
            var interpoint = this.intersectDiagWithVert(seg1,seg2);
            interx = interpoint.interx;
            intery = interpoint.intery;
        } 
        if (seg1infslope && !seg2infslope) {
            // seg1: x = xint
            // seg2: y = mx + b
            var interpoint = this.intersectDiagWithVert(seg2,seg1);
            interx = interpoint.interx;
            intery = interpoint.intery;
        }
        if (!seg1infslope && !seg2infslope) {
            // seg1: y = mx + b
            // seg2: y = mx + b
             

            var seg1slope = seg1ydiff / seg1xdiff;
            var seg1yint = seg1.y1 - seg1slope*seg1.x1;

            var seg2slope = seg2ydiff / seg2xdiff;
            var seg2yint = seg2.y1 - seg2slope*seg2.x1;

            //console.log('seg1 slope = ' + seg1slope);
            //console.log('seg2 slope = ' + seg2slope);

            // if same slope, there is no intersection
            var slopediff = Math.abs(seg1slope - seg2slope);
            if (slopediff < floatMargin) { 
                //console.log('same slope, no intersection, exiting');
                return {'theyIntersect':false};
            }
            
            // mx+b = mx+b
            interx = (seg2yint - seg1yint) / (seg1slope - seg2slope);
            intery = seg1slope*interx + seg1yint;
            //var intery2 = seg2slope*interx + seg2yint;

            //console.log('intersection x = ' + interx);
            //console.log('intersection y1 = ' + intery1);
            //console.log('intersection y2 = ' + intery2);
            //circle(interx,intery,8);

        }

        // is this intersection in the range of seg1 x and y values?
        // get min x on seg1.x1 vs seg.x2
        // get min y on seg1.y1 vs seg.y2
        var seg1minx = Math.min(seg1.x1,seg1.x2);
        var seg1maxx = Math.max(seg1.x1,seg1.x2);
         
        //console.log('x range ' + seg1minx + ' to ' + seg1maxx);

        var seg1miny = Math.min(seg1.y1,seg1.y2);
        var seg1maxy = Math.max(seg1.y1,seg1.y2);
        //console.log('y range ' + seg1miny + ' to ' + seg1maxy);

        var seg2minx = Math.min(seg2.x1,seg2.x2);
        var seg2maxx = Math.max(seg2.x1,seg2.x2);
         
        //console.log('x range ' + seg1minx + ' to ' + seg1maxx);

        var seg2miny = Math.min(seg2.y1,seg2.y2);
        var seg2maxy = Math.max(seg2.y1,seg2.y2);
        //console.log('y range ' + seg1miny + ' to ' + seg1maxy);


        if (
        (interx >= seg1minx || this.floatEquals(interx,seg1minx)) && 
        (interx <= seg1maxx || this.floatEquals(interx,seg1maxx)) && 
        (intery >= seg1miny || this.floatEquals(intery,seg1miny)) && 
        (intery <= seg1maxy || this.floatEquals(intery,seg1maxy)) &&
        (interx >= seg2minx || this.floatEquals(interx,seg2minx)) && 
        (interx <= seg2maxx || this.floatEquals(interx,seg2maxx)) && 
        (intery >= seg2miny || this.floatEquals(intery,seg2miny)) && 
        (intery <= seg2maxy || this.floatEquals(intery,seg2maxy))) {

            // intersection point
            //circle(interx,intery,6);
            return {'theyIntersect':true, 'interx':interx,'intery':intery};
        } else {
            return {'theyIntersect':false};
        }
        // the hidden line logic is: find the point on the building closes to the origin, 0,0 for both buildings. whoever is close to 0 in x or y is in front and wins. other gets chopped
    }

    floatEquals(f1,f2) {
        if (Math.abs(f1-f2) < floatMargin) {
            return true;
        } else {
            return false;
        }
    }

    intersectDiagWithVert(diag,vert) {
        var seg1 = diag;
        var seg2 = vert;

        var seg1xdiff = seg1.x2 - seg1.x1;
        var seg1ydiff = seg1.y2 - seg1.y1;
        var seg1infslope = Math.abs(seg1xdiff) < floatMargin;

        var seg2xdiff = seg2.x2 - seg2.x1;
        var seg2ydiff = seg2.y2 - seg2.y1;
        var seg2infslope = Math.abs(seg2xdiff) < floatMargin;

        //console.log('diag w vert');
            var seg1slope = seg1ydiff / seg1xdiff;
            var seg1yint = seg1.y1 - seg1slope*seg1.x1;
            //console.log('seg 1 slope = ' + seg1slope);
            //console.log('seg 1 yint = ' + seg1yint);

            // seg2: x = xint
            var seg2xint = seg2.x1;
            //console.log('x = xint ' + seg2.x1 + ' ' + seg2.x2);

            //circle(seg1.x1,seg1.y1,6);
            //circle(seg1.x2,seg1.y2,6);

            //circle(seg2.x1,seg2.y1,3);
            //circle(seg2.x2,seg2.y2,3);
            // y = mx + b
            var intery = seg1slope*seg2xint + seg1yint;
            var interx = seg2xint;
            //console.log('intersection x = ' + interx);
            //console.log('intersection y = ' + intery);
            //circle(interx,intery,8);
              
            return {'interx': interx, 'intery': intery};
    }
}

function drawLinePoints(p1,p2) {
    drawLine(M,p1.x,p1.y,p2.x,p2.y);
}

function drawLineSeg(seg) {
    drawLine(M, seg.x1, seg.y1, seg.x2, seg.y2);
}

function drawLine(a, t, d, i, m) {
    //strokeWeight(.45);
    //strokeWeight(W/1200);
    //stroke('#ff0000');
    //stroke('#375BA4');
    line(t,d,i,m);
    /*
    setTimeout(() => {
        var e = dist(t, d, i, m);
        //console.log('e = ' + e);
        for (let r = 0; r <= e; r++) {
            //console.log('r = ' + r);
            var o = lerp(t, i, r / e),
                n = lerp(d, m, r / e);
            //console.log('o = ' + o);
            //console.log('n = ' + n);
            arc(o, n, a, a, 0, TWO_PI);
            a = manageRadius(a);
            saveY(n);
        }
    });
    */
}

function saveY(r) {
    r < y_values.min && (y_values.min = r), r > y_values.max && (y_values.max = r)
}

function dist(r, e, o, n) {
    r = o - r, e = n - e;
    return Math.sqrt(r * r + e * e)
}

function manageRadius(r) {
    //console.log('M = ' + M);
    var e = .25 * M;
    return R.random_bool(.45) && r < 5 * M ? r += e : r > +M && (r -= e), r
}
 

/*
function betterline(e, t, o, s, a = 0) {
    const [n, r, h] = e, [l, d] = o;
    for (let e = 0; e < t; e++) {
        const e = i(l, d) * h,
            t = a / 180 * PI,
            o = (h - e) * random(),
            w = random() * s - .5 * s,
            c = random() * s - .5 * s;
        line(n + Math.cos(t) * o + w, r - Math.sin(t) * o + c, n + Math.cos(t) * (o + e) + w, r - Math.sin(t) * (o + e) + c)
    }
}
*/

function objToString (obj) {
    var str = '';
    for (var p in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, p)) {
            str += p + '::' + obj[p] + '\n';
        }
    }
    return str;
}
 
function normalizeAngle(angle) {
    //while (angle <= 0) {
        angle += Math.PI*2.0;
    //}
    return angle;
}
 
function copyRemove(arrToCopy, elementToRemove) {

    var newArr = [];
    for (var i = 0; i < arrToCopy.length; i++) {
        if (str(arrToCopy[i]) !== str(elementToRemove)) {
            newArr.push(arrToCopy[i]);
        }
    }
    return newArr;
}

function degrees(a) {
    return a * 180 / Math.PI;
}
 
function od(a) {
    return fxrand() <= a
}

function rint(a, b) {
    return Math.floor(rb(a, b));
}

function wc(a) {
    const b = fxrand();
    let c = 0;
    for (let e = 0; e < a.length - 1; e += 2) {
        const f = a[e],
            g = a[e + 1];
        if (c += g, b < c) return f
    }
    return a[a.length - 2]
}

function pick(a) {
    let len = a.length;
    return a[int(rb(0, len))];
}

function pickIndex(a) {
    let len = a.length;
    return int(rb(0, len));
}

function rb(a, b) {
    return a + (b - a) * fxrand();
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(fxrand() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function windowResized() {
    clear();
    init();
    setup();
}
