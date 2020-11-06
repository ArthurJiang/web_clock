var lastYear = null;
var lastMonth = null;
var lastDay = null;
var lastHour = null;
var lastMinute = null;
var lastSecond = null;
var lastMillSecond = null;
var canvasWidth = 20;
var canvasHeight = 20;
var longTimeRowNum = 5;
var longTimeCloumNum = 79;
var middleTimeRowNum = 5;
var middleTimeCloumNum = 27;
var shortTimeVerticalRowNum = 11;
var shortTimeVerticalCloumNum = 7;
var shortTimeHorizontalRowNum = 5;
var shortTimeHorizontalCloumNum = 17;
var ratio423 = 4 / 3;
var numLookupMatrixs = [
    [
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1]
    ],
    [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0]
    ],
    [
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1]
    ],
    [
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1]
    ],
    [
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 1]
    ],
    [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1]
    ],
    [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ],
    [
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1]
    ],
    [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ],
    [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1]
    ]
];
var splitLookUpMatrix = [
    [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 1, 0]
    ]
];
var verticalSplitLookUpMatrix = [0, 1, 0];
var millSecondCtxMatrixs = [
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ]
];
var secondCtxMatrixs = [
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ]
];
var minuteCtxMatrixs = [
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ]
];
var hourCtxMatrixs = [
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ]
];
var dayCtxMatrixs = [
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ]
];
var monthCtxMatrixs = [
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ]
];
var yearCtxMatrixs = [
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ]
];
var longTimeSplitCtxMatrixs = [
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ]
];
var middleTimeSplitCtxMatrixs = [
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ]
];
var shortTimeHorizontalSplitCtxMatrixs = [
    [
        [],
        [],
        [],
        [],
        []
    ]
];
var shortTimeVerticalSplitCtxMatrixs = [
    [
        []
    ],
    [
        []
    ]
];

// Shadow                       
var millSecondShadowCtxMatrixs = [
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ]
];
var secondShadowCtxMatrixs = [
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ]
];
var minuteShadowCtxMatrixs = [
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ]
];
var hourShadowCtxMatrixs = [
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ]
];
var dayShadowCtxMatrixs = [
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ]
];
var monthShadowCtxMatrixs = [
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ]
];
var yearShadowCtxMatrixs = [
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ]
];
var longTimeSplitShadowCtxMatrixs = [
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ]
];
var middleTimeSplitShadowCtxMatrixs = [
    [
        [],
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [],
        [],
        []
    ]
];

function longTimeClockCreater() {
    var canvasMatrixs = document.getElementById("canvas-matrixs");
    for (var r = 0; r < longTimeRowNum; r++) {
        var rowCanvasContainer = document.createElement("tr");
        rowCanvasContainer.id = r;
        canvasMatrixs.appendChild(rowCanvasContainer);

        for (var c = 0; c < longTimeCloumNum; c++) {
            var cloumCanvasContainer = document.createElement("td");
            cloumCanvasContainer.id = r.toString() + "-" + c.toString();
            rowCanvasContainer.appendChild(cloumCanvasContainer);

            var canvas = document.createElement("canvas");
            canvas.id = r.toString() + "-" + c.toString() + '-' + "canvas";
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
            cloumCanvasContainer.appendChild(canvas);
        }
    }
}

function longTimeClockShadowCreater() {
    var canvasMatrixs = document.getElementById("canvas-matrixs-shadow");
    for (var r = 0; r < longTimeRowNum; r++) {
        var rowCanvasContainer = document.createElement("tr");
        rowCanvasContainer.id = r;
        canvasMatrixs.appendChild(rowCanvasContainer);

        for (var c = 0; c < longTimeCloumNum; c++) {
            var cloumCanvasContainer = document.createElement("td");
            cloumCanvasContainer.id = r.toString() + "-" + c.toString();
            rowCanvasContainer.appendChild(cloumCanvasContainer);

            var canvas = document.createElement("canvas");
            canvas.id = r.toString() + "-" + c.toString() + '-' + "shadow-" + "canvas";
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
            cloumCanvasContainer.appendChild(canvas);
        }
    }
}

function middleTimeClockCreater() {
    var canvasMatrixs = document.getElementById("canvas-matrixs");
    for (var r = 0; r < middleTimeRowNum; r++) {
        var rowCanvasContainer = document.createElement("tr");
        rowCanvasContainer.id = r;
        canvasMatrixs.appendChild(rowCanvasContainer);

        for (var c = 0; c < middleTimeCloumNum; c++) {
            var cloumCanvasContainer = document.createElement("td");
            cloumCanvasContainer.id = r.toString() + "-" + c.toString();
            rowCanvasContainer.appendChild(cloumCanvasContainer);

            var canvas = document.createElement("canvas");
            canvas.id = r.toString() + "-" + c.toString() + '-' + "canvas";
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
            cloumCanvasContainer.appendChild(canvas);
        }
    }
}

function middleTimeClockShadowCreater() {
    var canvasMatrixs = document.getElementById("canvas-matrixs-shadow");
    for (var r = 0; r < middleTimeRowNum; r++) {
        var rowCanvasContainer = document.createElement("tr");
        rowCanvasContainer.id = r;
        canvasMatrixs.appendChild(rowCanvasContainer);

        for (var c = 0; c < middleTimeCloumNum; c++) {
            var cloumCanvasContainer = document.createElement("td");
            cloumCanvasContainer.id = r.toString() + "-" + c.toString();
            rowCanvasContainer.appendChild(cloumCanvasContainer);

            var canvas = document.createElement("canvas");
            canvas.id = r.toString() + "-" + c.toString() + '-' + "canvas";
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
            cloumCanvasContainer.appendChild(canvas);
        }
    }
}

function shortTimeHorizontalClockCreater() {
    var canvasMatrixs = document.getElementById("canvas-matrixs");
    for (var r = 0; r < shortTimeHorizontalRowNum; r++) {
        var rowCanvasContainer = document.createElement("tr");
        rowCanvasContainer.id = r;
        canvasMatrixs.appendChild(rowCanvasContainer);

        for (var c = 0; c < shortTimeHorizontalCloumNum; c++) {
            var cloumCanvasContainer = document.createElement("td");
            cloumCanvasContainer.id = r.toString() + "-" + c.toString();
            rowCanvasContainer.appendChild(cloumCanvasContainer);

            var canvas = document.createElement("canvas");
            canvas.id = r.toString() + "-" + c.toString() + '-' + "canvas";
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
            cloumCanvasContainer.appendChild(canvas);
        }
    }
}

function shortTimeVerticalClockCreater() {
    var canvasMatrixs = document.getElementById("canvas-matrixs");
    for (var r = 0; r < shortTimeVerticalRowNum; r++) {
        var rowCanvasContainer = document.createElement("tr");
        rowCanvasContainer.id = r;
        canvasMatrixs.appendChild(rowCanvasContainer);

        for (var c = 0; c < shortTimeVerticalCloumNum; c++) {
            var cloumCanvasContainer = document.createElement("td");
            cloumCanvasContainer.id = r.toString() + "-" + c.toString();
            rowCanvasContainer.appendChild(cloumCanvasContainer);

            var canvas = document.createElement("canvas");
            canvas.id = r.toString() + "-" + c.toString() + '-' + "canvas";
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
            cloumCanvasContainer.appendChild(canvas);
        }
    }
}

function loadLongTimeCtx() {
    for (var r = 0; r < longTimeRowNum; r++) {
        for (var c = 0; c < longTimeCloumNum; c++) {
            var ctx = document.getElementById(r.toString() + "-" + c.toString() + '-' + "canvas").getContext("2d");
            if (c >= 0 && c <= 14) {
                // Year
                if (c >= 0 && c <= 2) {
                    yearCtxMatrixs[0][r][c] = ctx;
                } else if (c >= 4 && c <= 6) {
                    yearCtxMatrixs[1][r][c - 4] = ctx;
                } else if (c >= 8 && c <= 10) {
                    yearCtxMatrixs[2][r][c - 8] = ctx;
                } else if (c >= 12 && c <= 14) {
                    yearCtxMatrixs[3][r][c - 12] = ctx;
                }
            } else if (c >= 15 && c <= 17) {
                // Year, month split
                longTimeSplitCtxMatrixs[0][r][c - 15] = ctx;
            } else if (c >= 18 && c <= 24) {
                // Month
                if (c >= 18 && c <= 20) {
                    monthCtxMatrixs[0][r][c - 18] = ctx;
                } else if (c >= 22 && c <= 24) {
                    monthCtxMatrixs[1][r][c - 22] = ctx;
                }
            } else if (c >= 25 && c <= 27) {
                // Month, day split
                longTimeSplitCtxMatrixs[1][r][c - 25] = ctx;
            } else if (c >= 28 && c <= 34) {
                // Day
                if (c >= 28 && c <= 30) {
                    dayCtxMatrixs[0][r][c - 28] = ctx;
                } else if (c >= 32 && c <= 34) {
                    dayCtxMatrixs[1][r][c - 32] = ctx;
                }
            } else if (c >= 35 && c <= 37) {
                // Day, hour split
                longTimeSplitCtxMatrixs[2][r][c - 35] = ctx;
            } else if (c >= 38 && c <= 44) {
                // Hour
                if (c >= 38 && c <= 40) {
                    hourCtxMatrixs[0][r][c - 38] = ctx;
                } else if (c >= 42 && c <= 44) {
                    hourCtxMatrixs[1][r][c - 42] = ctx;
                }
            } else if (c >= 45 && c <= 47) {
                // Hour, minute split
                longTimeSplitCtxMatrixs[3][r][c - 45] = ctx;
            } else if (c >= 48 && c <= 54) {
                // Minute
                if (c >= 48 && c <= 50) {
                    minuteCtxMatrixs[0][r][c - 48] = ctx;
                } else if (c >= 52 && c <= 54) {
                    minuteCtxMatrixs[1][r][c - 52] = ctx;
                }
            } else if (c >= 55 && c <= 57) {
                // Minute, second split
                longTimeSplitCtxMatrixs[4][r][c - 55] = ctx;
            } else if (c >= 58 && c <= 64) {
                // Second
                if (c >= 58 && c <= 60) {
                    secondCtxMatrixs[0][r][c - 58] = ctx;
                } else if (c >= 62 && c <= 64) {
                    secondCtxMatrixs[1][r][c - 62] = ctx;
                }
            } else if (c >= 65 && c <= 67) {
                // Secon, millSeond split
                longTimeSplitCtxMatrixs[5][r][c - 65] = ctx;
            } else if (c >= 68 && c <= 78) {
                // Millsecond
                if (c >= 68 && c <= 70) {
                    millSecondCtxMatrixs[0][r][c - 68] = ctx;
                } else if (c >= 72 && c <= 74) {
                    millSecondCtxMatrixs[1][r][c - 72] = ctx;
                } else if (c >= 76 && c <= 78) {
                    millSecondCtxMatrixs[2][r][c - 76] = ctx;
                }
            }
        }
    }
}

function loadLongTimeCtxShadow() {
    for (var r = 0; r < longTimeRowNum; r++) {
        for (var c = 0; c < longTimeCloumNum; c++) {
            var ctx = document.getElementById(r.toString() + "-" + c.toString() + '-' + "shadow-" + "canvas").getContext("2d");
            if (c >= 0 && c <= 14) {
                // Year
                if (c >= 0 && c <= 2) {
                    yearShadowCtxMatrixs[0][r][c] = ctx;
                } else if (c >= 4 && c <= 6) {
                    yearShadowCtxMatrixs[1][r][c - 4] = ctx;
                } else if (c >= 8 && c <= 10) {
                    yearShadowCtxMatrixs[2][r][c - 8] = ctx;
                } else if (c >= 12 && c <= 14) {
                    yearShadowCtxMatrixs[3][r][c - 12] = ctx;
                }
            } else if (c >= 15 && c <= 17) {
                // Year, month split
                longTimeSplitShadowCtxMatrixs[0][r][c - 15] = ctx;
            } else if (c >= 18 && c <= 24) {
                // Month
                if (c >= 18 && c <= 20) {
                    monthShadowCtxMatrixs[0][r][c - 18] = ctx;
                } else if (c >= 22 && c <= 24) {
                    monthShadowCtxMatrixs[1][r][c - 22] = ctx;
                }
            } else if (c >= 25 && c <= 27) {
                // Month, day split
                longTimeSplitShadowCtxMatrixs[1][r][c - 25] = ctx;
            } else if (c >= 28 && c <= 34) {
                // Day
                if (c >= 28 && c <= 30) {
                    dayShadowCtxMatrixs[0][r][c - 28] = ctx;
                } else if (c >= 32 && c <= 34) {
                    dayShadowCtxMatrixs[1][r][c - 32] = ctx;
                }
            } else if (c >= 35 && c <= 37) {
                // Day, hour split
                longTimeSplitShadowCtxMatrixs[2][r][c - 35] = ctx;
            } else if (c >= 38 && c <= 44) {
                // Hour
                if (c >= 38 && c <= 40) {
                    hourShadowCtxMatrixs[0][r][c - 38] = ctx;
                } else if (c >= 42 && c <= 44) {
                    hourShadowCtxMatrixs[1][r][c - 42] = ctx;
                }
            } else if (c >= 45 && c <= 47) {
                // Hour, minute split
                longTimeSplitShadowCtxMatrixs[3][r][c - 45] = ctx;
            } else if (c >= 48 && c <= 54) {
                // Minute
                if (c >= 48 && c <= 50) {
                    minuteShadowCtxMatrixs[0][r][c - 48] = ctx;
                } else if (c >= 52 && c <= 54) {
                    minuteShadowCtxMatrixs[1][r][c - 52] = ctx;
                }
            } else if (c >= 55 && c <= 57) {
                // Minute, second split
                longTimeSplitShadowCtxMatrixs[4][r][c - 55] = ctx;
            } else if (c >= 58 && c <= 64) {
                // Second
                if (c >= 58 && c <= 60) {
                    secondShadowCtxMatrixs[0][r][c - 58] = ctx;
                } else if (c >= 62 && c <= 64) {
                    secondShadowCtxMatrixs[1][r][c - 62] = ctx;
                }
            } else if (c >= 65 && c <= 67) {
                // Secon, millSeond split
                longTimeSplitShadowCtxMatrixs[5][r][c - 65] = ctx;
            } else if (c >= 68 && c <= 78) {
                // Millsecond
                if (c >= 68 && c <= 70) {
                    millSecondShadowCtxMatrixs[0][r][c - 68] = ctx;
                } else if (c >= 72 && c <= 74) {
                    millSecondShadowCtxMatrixs[1][r][c - 72] = ctx;
                } else if (c >= 76 && c <= 78) {
                    millSecondShadowCtxMatrixs[2][r][c - 76] = ctx;
                }
            }
        }
    }

}

function loadMiddleTimeCtx() {
    for (var r = 0; r < middleTimeRowNum; r++) {
        for (var c = 0; c < middleTimeCloumNum; c++) {
            var ctx = document.getElementById(r.toString() + "-" + c.toString() + '-' + "canvas").getContext("2d");

            if (c >= 0 && c <= 6) {
                // Hour
                if (c >= 0 && c <= 2) {
                    hourCtxMatrixs[0][r][c] = ctx;
                } else if (c >= 4 && c <= 6) {
                    hourCtxMatrixs[1][r][c - 4] = ctx;
                }
            } else if (c >= 7 && c <= 9) {
                middleTimeSplitCtxMatrixs[0][r][c - 7] = ctx;
            } else if (c >= 10 && c <= 16) {
                if (c >= 10 && c <= 12) {
                    minuteCtxMatrixs[0][r][c - 10] = ctx;
                } else if (c >= 14 && c <= 16) {
                    minuteCtxMatrixs[1][r][c - 14] = ctx;
                }
            } else if (c >= 17 && c <= 19) {
                middleTimeSplitCtxMatrixs[1][r][c - 17] = ctx;
            } else if (c >= 20 && 26) {
                if (c >= 20 && c <= 22) {
                    secondCtxMatrixs[0][r][c - 20] = ctx;
                } else if (c >= 24 && c <= 26) {
                    secondCtxMatrixs[1][r][c - 24] = ctx;
                }
            }
        }
    }
}

function loadShortTimeHorizontalCtx() {
    for (var r = 0; r < shortTimeHorizontalRowNum; r++) {
        for (var c = 0; c < shortTimeHorizontalCloumNum; c++) {
            var ctx = document.getElementById(r.toString() + "-" + c.toString() + '-' + "canvas").getContext("2d");

            if (c >= 0 && c <= 6) {
                // Hour
                if (c >= 0 && c <= 2) {
                    hourCtxMatrixs[0][r][c] = ctx;
                } else if (c >= 4 && c <= 6) {
                    hourCtxMatrixs[1][r][c - 4] = ctx;
                }
            } else if (c >= 7 && c <= 9) {
                shortTimeHorizontalSplitCtxMatrixs[0][r][c - 7] = ctx;
            } else if (c >= 10 && c <= 16) {
                if (c >= 10 && c <= 12) {
                    minuteCtxMatrixs[0][r][c - 10] = ctx;
                } else if (c >= 14 && c <= 16) {
                    minuteCtxMatrixs[1][r][c - 14] = ctx;
                }
            }
        }
    }
}

function loadShortTimeVerticalCtx() {
    for (var r = 0; r < shortTimeVerticalRowNum; r++) {
        for (var c = 0; c < shortTimeVerticalCloumNum; c++) {
            var ctx = document.getElementById(r.toString() + "-" + c.toString() + "-" + "canvas").getContext("2d");

            if (r >= 0 && r <= 4) {
                // Hour
                if (c >= 0 && c <= 2) {
                    hourCtxMatrixs[0][r][c] = ctx;
                } else if (c >= 4 && c <= 6) {
                    hourCtxMatrixs[1][r][c - 4] = ctx;
                }
            } else if (r == 5) {
                if (c >= 0 && c <= 2) {
                    shortTimeVerticalSplitCtxMatrixs[0][r - 5][c] = ctx;
                } else if (c >= 4 && c <= 6) {
                    shortTimeVerticalSplitCtxMatrixs[1][r - 5][c - 4] = ctx;
                }
            } else if (r >= 6 && r <= 10) {
                // Minute
                if (c >= 0 && c <= 2) {
                    minuteCtxMatrixs[0][r - 6][c] = ctx;
                } else if (c >= 4 && c <= 6) {
                    minuteCtxMatrixs[1][r - 6][c - 4] = ctx;
                }
            }
        }
    }
}

function longTimeUpdateWithoutShadow() {
    var date = new Date;
    var currentYear = date.getFullYear();
    var currentMonth = date.getMonth() + 1;
    var currentDay = date.getDate();
    var currentHour = date.getHours();
    var currentMinute = date.getMinutes();
    var currentSecond = date.getSeconds();
    var currentMillSecond = date.getMilliseconds();

    if (lastYear != currentYear) {
        lastYear = currentYear;
        yearUpdate(currentYear, false);
    }
    if (lastMonth != currentMonth) {
        lastMonth = currentMonth;
        monthUpdate(currentMonth, false);
    }
    if (lastDay != currentDay) {
        lastDay = currentDay;
        dayUpdate(currentDay, false);
    }
    if (lastHour != currentHour) {
        lastHour = currentHour;
        hourUpdate(currentHour, false);
    }
    if (lastMinute != currentMinute) {
        lastMinute = currentMinute;
        minuteUpdate(currentMinute, false);
    }
    if (lastSecond != currentSecond) {
        lastSecond = currentSecond;
        secondUpdate(currentSecond, false);
    }
    if (lastMillSecond != currentMillSecond) {
        lastMillSecond = currentMillSecond;
        millSecondUpdate(currentMillSecond, false);
    }

    window.requestAnimationFrame(longTimeUpdateWithoutShadow);
}

function longTimeUpdateWithShadow() {
    var date = new Date;
    var currentYear = date.getFullYear();
    var currentMonth = date.getMonth() + 1;
    var currentDay = date.getDate();
    var currentHour = date.getHours();
    var currentMinute = date.getMinutes();
    var currentSecond = date.getSeconds();
    var currentMillSecond = date.getMilliseconds();

    if (lastYear != currentYear) {
        lastYear = currentYear;
        yearUpdate(currentYear, true);
        yearUpdate(currentYear, false);
    }
    if (lastMonth != currentMonth) {
        lastMonth = currentMonth;
        monthUpdate(currentMonth, true);
        monthUpdate(currentMonth, false);
    }
    if (lastDay != currentDay) {
        lastDay = currentDay;
        dayUpdate(currentDay, true);
        dayUpdate(currentDay, false);
    }
    if (lastHour != currentHour) {
        lastHour = currentHour;
        hourUpdate(currentHour, true);
        hourUpdate(currentHour, false);
    }
    if (lastMinute != currentMinute) {
        lastMinute = currentMinute;
        minuteUpdate(currentMinute, true);
        minuteUpdate(currentMinute, false);
    }
    if (lastSecond != currentSecond) {
        lastSecond = currentSecond;
        secondUpdate(currentSecond, true);
        secondUpdate(currentSecond, false);
    }
    if (lastMillSecond != currentMillSecond) {
        lastMillSecond = currentMillSecond;
        millSecondUpdate(currentMillSecond, true);
        millSecondUpdate(currentMillSecond, false);
    }

    window.requestAnimationFrame(longTimeUpdateWithShadow);
}

function middleTimeUpdateWithoutShadow() {
    var date = new Date;
    var currentHour = date.getHours();
    var currentMinute = date.getMinutes();
    var currentSecond = date.getSeconds();

    if (lastHour != currentHour) {
        lastHour = currentHour;
        hourUpdate(currentHour, false);
    }
    if (lastMinute != currentMinute) {
        lastMinute = currentMinute;
        minuteUpdate(currentMinute, false);
    }
    if (lastSecond != currentSecond) {
        lastSecond = currentSecond;
        secondUpdate(currentSecond, false);
    }

    window.requestAnimationFrame(middleTimeUpdateWithoutShadow);
}

function shortTimeHorizontalUpdate() {
    var date = new Date;
    var currentHour = date.getHours();
    var currentMinute = date.getMinutes();
    var currentSecond = date.getSeconds();

    if (lastHour != currentHour) {
        lastHour = currentHour;
        hourUpdate(currentHour, false);
    }
    if (lastMinute != currentMinute) {
        lastMinute = currentMinute;
        minuteUpdate(currentMinute, false);
    }
    if (lastSecond != currentSecond) {
        lastSecond = currentSecond;
        updateShortTimeHorizontalSplit(currentSecond % 2);
    }

    window.requestAnimationFrame(shortTimeHorizontalUpdate);
}

function shortTimeVerticalUpdate() {
    var date = new Date;
    var currentHour = date.getHours();
    var currentMinute = date.getMinutes();
    var currentSecond = date.getSeconds();

    if (lastHour != currentHour) {
        lastHour = currentHour;
        hourUpdate(currentHour, false);
    }
    if (lastMinute != currentMinute) {
        lastMinute = currentMinute;
        minuteUpdate(currentMinute, false);
    }
    if (lastSecond != currentSecond) {
        lastSecond = currentSecond;
        updateShortTimeVerticalSplit(currentSecond % 2);
    }

    window.requestAnimationFrame(shortTimeVerticalUpdate);
}

function yearUpdate(currentYear, isShadow) {
    if (isShadow) {
        clearCanvas(yearShadowCtxMatrixs);
        drawNumber(Math.floor(currentYear / 1000), yearShadowCtxMatrixs[0], isShadow);
        drawNumber(Math.floor(currentYear / 100) % 10, yearShadowCtxMatrixs[1], isShadow);
        drawNumber(Math.floor(currentYear / 10) % 10, yearShadowCtxMatrixs[2], isShadow);
        drawNumber(currentYear % 10, yearShadowCtxMatrixs[3], isShadow);

    } else {
        clearCanvas(yearCtxMatrixs);
        drawNumber(Math.floor(currentYear / 1000), yearCtxMatrixs[0], isShadow);
        drawNumber(Math.floor(currentYear / 100) % 10, yearCtxMatrixs[1], isShadow);
        drawNumber(Math.floor(currentYear / 10) % 10, yearCtxMatrixs[2], isShadow);
        drawNumber(currentYear % 10, yearCtxMatrixs[3], isShadow);

    }
}

function monthUpdate(currentMonth, isShadow) {
    if (isShadow) {
        clearCanvas(monthShadowCtxMatrixs);
        drawNumber(Math.floor(currentMonth / 10), monthShadowCtxMatrixs[0], isShadow);
        drawNumber(currentMonth % 10, monthShadowCtxMatrixs[1], isShadow);
    } else {
        clearCanvas(monthCtxMatrixs);
        drawNumber(Math.floor(currentMonth / 10), monthCtxMatrixs[0], isShadow);
        drawNumber(currentMonth % 10, monthCtxMatrixs[1], isShadow);
    }
}

function dayUpdate(currentDay, isShadow) {
    if (isShadow) {
        clearCanvas(dayShadowCtxMatrixs);
        drawNumber(Math.floor(currentDay / 10), dayShadowCtxMatrixs[0], isShadow);
        drawNumber(currentDay % 10, dayShadowCtxMatrixs[1], isShadow);
    } else {
        clearCanvas(dayCtxMatrixs);
        drawNumber(Math.floor(currentDay / 10), dayCtxMatrixs[0], isShadow);
        drawNumber(currentDay % 10, dayCtxMatrixs[1], isShadow);
    }
}

function hourUpdate(currentHour, isShadow) {
    if (isShadow) {
        clearCanvas(hourShadowCtxMatrixs);
        drawNumber(Math.floor(currentHour / 10), hourShadowCtxMatrixs[0], isShadow);
        drawNumber(currentHour % 10, hourShadowCtxMatrixs[1], isShadow);
    } else {
        clearCanvas(hourCtxMatrixs);
        drawNumber(Math.floor(currentHour / 10), hourCtxMatrixs[0], isShadow);
        drawNumber(currentHour % 10, hourCtxMatrixs[1], isShadow);
    }
}

function minuteUpdate(currentMinute, isShadow) {
    if (isShadow) {
        clearCanvas(minuteShadowCtxMatrixs);
        drawNumber(Math.floor(currentMinute / 10), minuteShadowCtxMatrixs[0], isShadow);
        drawNumber(currentMinute % 10, minuteShadowCtxMatrixs[1], isShadow);
    } else {
        clearCanvas(minuteCtxMatrixs);
        drawNumber(Math.floor(currentMinute / 10), minuteCtxMatrixs[0], isShadow);
        drawNumber(currentMinute % 10, minuteCtxMatrixs[1], isShadow);
    }
}

function secondUpdate(currentSecond, isShadow) {
    if (isShadow) {
        clearCanvas(secondShadowCtxMatrixs);
        drawNumber(Math.floor(currentSecond / 10), secondShadowCtxMatrixs[0], isShadow);
        drawNumber(currentSecond % 10, secondShadowCtxMatrixs[1], isShadow);
    } else {
        clearCanvas(secondCtxMatrixs);
        drawNumber(Math.floor(currentSecond / 10), secondCtxMatrixs[0], isShadow);
        drawNumber(currentSecond % 10, secondCtxMatrixs[1], isShadow);
    }
}

function millSecondUpdate(currentMillSecond, isShadow) {
    if (isShadow) {
        clearCanvas(millSecondShadowCtxMatrixs);
        drawNumber(Math.floor(currentMillSecond / 100), millSecondShadowCtxMatrixs[0], isShadow);
        drawNumber(Math.floor(currentMillSecond / 10) % 10, millSecondShadowCtxMatrixs[1], isShadow);
        drawNumber(currentMillSecond % 10, millSecondShadowCtxMatrixs[2], isShadow);
    } else {
        clearCanvas(millSecondCtxMatrixs);
        drawNumber(Math.floor(currentMillSecond / 100), millSecondCtxMatrixs[0], isShadow);
        drawNumber(Math.floor(currentMillSecond / 10) % 10, millSecondCtxMatrixs[1], isShadow);
        drawNumber(currentMillSecond % 10, millSecondCtxMatrixs[2], isShadow);
    }
}

function longTimeDrawSplit(isShadow) {
    if (isShadow) {
        clearCanvas(longTimeSplitShadowCtxMatrixs);
        for (var i = 0; i < longTimeSplitShadowCtxMatrixs.length; i++) {
            for (var j = 0; j < longTimeSplitShadowCtxMatrixs[i].length; j++) {
                for (var k = 0; k < longTimeSplitShadowCtxMatrixs[i][j].length; k++) {
                    if (i > 2 && i != 5) {
                        if (splitLookUpMatrix[0][j][k] == 1) {
                            longTimeSplitShadowCtxMatrixs[i][longTimeSplitShadowCtxMatrixs[i].length - 1 - j][k].fillStyle = "#FF5800";
                            longTimeSplitShadowCtxMatrixs[i][longTimeSplitShadowCtxMatrixs[i].length - 1 - j][k].fillRect(0, 0, canvasWidth, canvasHeight);
                        }
                    } else {
                        if (splitLookUpMatrix[1][j][k] == 1) {
                            if (i == 5) {
                                longTimeSplitShadowCtxMatrixs[i][longTimeSplitShadowCtxMatrixs[i].length - 1 - j][k].fillStyle = "#909000";
                            } else {
                                longTimeSplitShadowCtxMatrixs[i][longTimeSplitShadowCtxMatrixs[i].length - 1 - j][k].fillStyle = "#A00032";
                            }
                            longTimeSplitShadowCtxMatrixs[i][longTimeSplitShadowCtxMatrixs[i].length - 1 - j][k].fillRect(0, 0, canvasWidth, canvasHeight);
                        }
                    }
                }
            }
        }
    } else {
        clearCanvas(longTimeSplitCtxMatrixs);
        for (var i = 0; i < longTimeSplitCtxMatrixs.length; i++) {
            for (var j = 0; j < longTimeSplitCtxMatrixs[i].length; j++) {
                for (var k = 0; k < longTimeSplitCtxMatrixs[i][j].length; k++) {
                    if (i > 2 && i != 5) {
                        if (splitLookUpMatrix[0][j][k] == 1) {
                            longTimeSplitCtxMatrixs[i][j][k].fillStyle = "#FF5800";
                            longTimeSplitCtxMatrixs[i][j][k].fillRect(0, 0, canvasWidth, canvasHeight);
                        }
                    } else {
                        if (splitLookUpMatrix[1][j][k] == 1) {
                            if (i == 5) {
                                longTimeSplitCtxMatrixs[i][j][k].fillStyle = "#909000";
                            } else {
                                longTimeSplitCtxMatrixs[i][j][k].fillStyle = "#A00032";
                            }
                            longTimeSplitCtxMatrixs[i][j][k].fillRect(0, 0, canvasWidth, canvasHeight);
                        }
                    }
                }
            }
        }
    }
}

function middleTimeDrawSplit(isShadow) {
    if (isShadow) {
        clearCanvas(middleTimeSplitShadowCtxMatrixs);
        for (var i = 0; i < middleTimeSplitShadowCtxMatrixs.length; i++) {
            for (var j = 0; j < middleTimeSplitShadowCtxMatrixs[i].length; j++) {
                for (var k = 0; k < middleTimeSplitShadowCtxMatrixs[i][j].length; k++) {
                    if (splitLookUpMatrix[0][j][k] == 1) {
                        middleTimeSplitShadowCtxMatrixs[i][longTimeSplitShadowCtxMatrixs[i].length - 1 - j][k].fillStyle = "#FF5800";
                        middleTimeSplitShadowCtxMatrixs[i][longTimeSplitShadowCtxMatrixs[i].length - 1 - j][k].fillRect(0, 0, canvasWidth, canvasHeight);
                    }
                }
            }
        }
    } else {
        clearCanvas(middleTimeSplitCtxMatrixs);
        for (var i = 0; i < middleTimeSplitCtxMatrixs.length; i++) {
            for (var j = 0; j < middleTimeSplitCtxMatrixs[i].length; j++) {
                for (var k = 0; k < middleTimeSplitCtxMatrixs[i][j].length; k++) {
                    if (splitLookUpMatrix[0][j][k] == 1) {
                        middleTimeSplitCtxMatrixs[i][j][k].fillStyle = "#FF5800";
                        middleTimeSplitCtxMatrixs[i][j][k].fillRect(0, 0, canvasWidth, canvasHeight);
                    }
                }
            }
        }
    }
}

function updateShortTimeHorizontalSplit(shouldShow) {
    if (shouldShow) {
        for (var i = 0; i < shortTimeHorizontalSplitCtxMatrixs.length; i++) {
            for (var j = 0; j < shortTimeHorizontalSplitCtxMatrixs[i].length; j++) {
                for (var k = 0; k < shortTimeHorizontalSplitCtxMatrixs[i][j].length; k++) {
                    if (splitLookUpMatrix[0][j][k] == 1) {
                        shortTimeHorizontalSplitCtxMatrixs[i][j][k].fillStyle = "#FF5800";
                        shortTimeHorizontalSplitCtxMatrixs[i][j][k].fillRect(0, 0, canvasWidth, canvasHeight);
                    }
                }

            }
        }
    } else {
        clearCanvas(shortTimeHorizontalSplitCtxMatrixs);
    }
}

function updateShortTimeVerticalSplit(shouldShow) {
    if (shouldShow) {
        for (var i = 0; i < shortTimeVerticalSplitCtxMatrixs.length; i++) {
            for (var j = 0; j < shortTimeVerticalSplitCtxMatrixs[i].length; j++) {
                for (var k = 0; k < shortTimeVerticalSplitCtxMatrixs[i][j].length; k++) {
                    if (verticalSplitLookUpMatrix[k] == 1) {
                        shortTimeVerticalSplitCtxMatrixs[i][j][k].fillStyle = "#FF5800";
                        shortTimeVerticalSplitCtxMatrixs[i][j][k].fillRect(0, 0, canvasWidth, canvasHeight);
                    }
                }

            }
        }
    } else {
        clearCanvas(shortTimeVerticalSplitCtxMatrixs);
    }
}

function clearCanvas(ctxMatrixs) {
    for (var i = 0; i < ctxMatrixs.length; i++) {
        for (var k = 0; k < ctxMatrixs[i].length; k++) {
            for (var j = 0; j < ctxMatrixs[i][k].length; j++) {
                ctxMatrixs[i][k][j].clearRect(0, 0, canvasWidth, canvasHeight);
            }
        }
    }
}

function drawNumber(num, ctxMatrix, isShadow) {
    var numMatrix = numLookupMatrixs[num];
    if (isShadow) {
        for (var i = 0; i < numLookupMatrixs[num].length; i++) {
            for (var j = 0; j < numMatrix[i].length; j++) {
                if (numMatrix[i][j] == 1) {
                    ctxMatrix[numLookupMatrixs[num].length - 1 - i][j].fillStyle = "#FFFFFF";
                    ctxMatrix[numLookupMatrixs[num].length - 1 - i][j].fillRect(0, 0, canvasWidth, canvasHeight);
                }
            }
        }
    } else {
        for (var i = 0; i < numLookupMatrixs[num].length; i++) {
            for (var j = 0; j < numMatrix[i].length; j++) {
                if (numMatrix[i][j] == 1) {
                    ctxMatrix[i][j].fillStyle = "#FFFFFF";
                    ctxMatrix[i][j].fillRect(0, 0, canvasWidth, canvasHeight);
                }
            }
        }
    }
}

function onload() {
    console.log("width: " + window.innerWidth);
    console.log("height: " + window.innerHeight);
    var winHeight = window.innerHeight
    var winWidth = window.innerWidth

    // Long time format
    if (winWidth / winHeight >= 1.5) {
        if (winHeight >= 700) {
            var width = window.innerWidth * 0.65;
            if (winWidth >= 1475) {
                canvasWidth = width / longTimeCloumNum;
                canvasHeight = width * 1.5 / longTimeCloumNum;
            } else {
                canvasWidth = width / longTimeCloumNum;
                canvasHeight = width * 1.5 / longTimeCloumNum;
            }

            var tableContainer = document.getElementById("table-container");
            tableContainer.setAttribute("style", "top:0;left:0;bottom:0;right:0;width:" + width + ";height:" + canvasWidth * longTimeRowNum + ";position:absolute;margin:auto");
            longTimeClockCreater();
            var canvasMatrixs = document.getElementById("canvas-matrixs");
            longTimeClockShadowCreater();
            canvasMatrixs.setAttribute("style", "table-layout: fixed;top:25%;left:5%;bottom:25%;right:5%;height:50%;width:90%;position:absolute;");
            var canvasMatrixsShadow = document.getElementById("canvas-matrixs-shadow");
            canvasMatrixsShadow.setAttribute("style", "table-layout: fixed;top:-35%;left:5%;bottom:25%;right:5%;height:50%;width:90%;position:absolute;opacity: 0.06;");
            loadLongTimeCtx();
            loadLongTimeCtxShadow();
            longTimeDrawSplit(true);
            longTimeDrawSplit(false);
            longTimeUpdateWithShadow();

        } else if (winHeight >= 150) {
            var width = window.innerWidth * 0.65;
            if (winWidth >= 1475) {
                canvasWidth = width / longTimeCloumNum;
                canvasHeight = width * 1.2 / longTimeCloumNum;
            } else {
                canvasWidth = width / longTimeCloumNum;
                canvasHeight = width * 1.5 / longTimeCloumNum;
            }

            var tableContainer = document.getElementById("table-container");
            tableContainer.setAttribute("style", "top:0;left:0;bottom:0;right:0;width:" + width + ";height:" + canvasWidth * longTimeRowNum + ";position:absolute;margin:auto");
            longTimeClockCreater();
            var canvasMatrixs = document.getElementById("canvas-matrixs");
            canvasMatrixs.setAttribute("style", "table-layout: fixed;top:25%;left:5%;bottom:25%;right:5%;height:50%;width:90%;position:absolute;");
            loadLongTimeCtx();
            longTimeDrawSplit(false);
            longTimeUpdateWithoutShadow();
        } else {
            var width = window.innerWidth * 0.65;
            if (winWidth >= 1475) {
                canvasWidth = width / longTimeCloumNum;
                canvasHeight = width / longTimeCloumNum;
            } else {
                canvasWidth = width / longTimeCloumNum;
                canvasHeight = width * 1.7 / longTimeCloumNum;
            }

            var tableContainer = document.getElementById("table-container");
            tableContainer.setAttribute("style", "top:0;left:0;bottom:0;right:0;width:" + width + ";height:" + canvasWidth * longTimeRowNum + ";position:absolute;margin:auto");
            longTimeClockCreater();
            var canvasMatrixs = document.getElementById("canvas-matrixs");
            canvasMatrixs.setAttribute("style", "table-layout: fixed;top:-70%;left:5%;bottom:0%;right:5%;height:50%;width:90%;position:absolute;");
            loadLongTimeCtx();
            longTimeDrawSplit(false);
            longTimeUpdateWithoutShadow();
        }
    } else if (winWidth / winHeight >= 0.8) { // middle time format
        // TODO
        var width = window.innerWidth;
        canvasWidth = width * 2 / longTimeCloumNum;
        canvasHeight = width * 2 / longTimeCloumNum;
        var tableContainer = document.getElementById("table-container");
        tableContainer.setAttribute("style", "top:0;left:0;bottom:0;right:0;width:" + width + ";height:" + canvasWidth * longTimeRowNum + ";position:absolute;margin:auto");
        middleTimeClockCreater();
        var canvasMatrixs = document.getElementById("canvas-matrixs");
        canvasMatrixs.setAttribute("style", "table-layout: fixed;top:25%;left:5%;bottom:25%;right:5%;height:50%;width:90%;position:absolute;");
        loadMiddleTimeCtx();
        middleTimeDrawSplit(false);
        middleTimeUpdateWithoutShadow();
    } else if (winWidth / winHeight >= 0.5) { // short time format
        // TODO
        var width = window.innerWidth;
        canvasWidth = width * 3 / longTimeCloumNum;
        canvasHeight = width * 4 / longTimeCloumNum;
        var tableContainer = document.getElementById("table-container");
        tableContainer.setAttribute("style", "top:0;left:0;bottom:0;right:0;width:" + width + ";height:" + canvasWidth * longTimeRowNum + ";position:absolute;margin:auto");
        shortTimeHorizontalClockCreater();
        var canvasMatrixs = document.getElementById("canvas-matrixs");
        canvasMatrixs.setAttribute("style", "table-layout: fixed;top:25%;left:5%;bottom:25%;right:5%;height:50%;width:90%;position:absolute;");
        loadShortTimeHorizontalCtx();
        shortTimeHorizontalUpdate();
    } else { // circle clock
        // TODO
        var width = window.innerWidth;
        canvasWidth = width * 8 / longTimeCloumNum;
        canvasHeight = width * 4 / longTimeCloumNum;
        var tableContainer = document.getElementById("table-container");
        tableContainer.setAttribute("style", "top:0;left:0;bottom:0;right:0;width:" + width + ";height:" + canvasWidth * longTimeRowNum + ";position:absolute;margin:auto");
        shortTimeVerticalClockCreater();
        var canvasMatrixs = document.getElementById("canvas-matrixs");
        canvasMatrixs.setAttribute("style", "table-layout: fixed;top:25%;left:5%;bottom:25%;right:5%;height:50%;width:90%;position:absolute;");
        loadShortTimeVerticalCtx();
        shortTimeVerticalUpdate();
    }

}

function resize() {
    lastYear = null;
    lastMonth = null;
    lastDay = null;
    lastHour = null;
    lastMinute = null;
    lastSecond = null;
    lastSecond = null;
    lastMillSecond = null;
    var canvasMatrixs = document.getElementById("canvas-matrixs");
    while (canvasMatrixs.firstChild) {
        canvasMatrixs.removeChild(canvasMatrixs.firstChild);
    }

    var canvasMatrixsShadow = document.getElementById("canvas-matrixs-shadow");
    while (canvasMatrixsShadow.firstChild) {
        canvasMatrixsShadow.removeChild(canvasMatrixsShadow.firstChild);
    }

    onload();
    console.log("width: " + window.innerWidth);
    console.log("height: " + window.innerHeight);
}
document.addEventListener("DOMContentLoaded", onload);
window.addEventListener("resize", resize);