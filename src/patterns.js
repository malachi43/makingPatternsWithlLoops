
function pattern1(n) {
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            process.stdout.write(` * `)
        }
        console.log()
    }

}

function pattern2(n) {
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j <= i; ++j) {
            process.stdout.write(` * `)
        }
        console.log()
    }

}

function pattern3(n) {
    for (let i = 1; i <= n; ++i) {
        for (let j = 1; j <= i; ++j) {
            process.stdout.write(` ${j} `)
        }
        console.log()
    }

}

function pattern4(n) {
    for (let i = 1; i <= n; ++i) {
        for (let j = 1; j <= i; ++j) {
            process.stdout.write(` ${i} `)
        }
        console.log()
    }

}

function pattern5(n) {
    for (let i = 1; i <= n; ++i) {
        for (let j = 1; j <= n - i + 1; ++j) {
            process.stdout.write(` * `)
        }
        console.log()
    }

}

function pattern6(n) {
    for (let i = 1; i <= n; ++i) {
        for (let j = 1; j <= n - i + 1; ++j) {
            process.stdout.write(` ${j} `)
        }
        console.log()
    }

}

function pattern7(n) {
    for (let i = 1; i <= n; ++i) {
        //space
        for (let j = 1; j <= n - i; ++j) {
            process.stdout.write(` `)
        }
        //star
        for (let j = 1; j <= 2 * i - 1; ++j) {
            process.stdout.write(`*`)
        }
        //space
        for (let j = 1; j <= n - i; ++j) {
            process.stdout.write(` `)
        }
        console.log()
    }
}

function pattern8(n) {
    for (let i = 1; i <= n; ++i) {
        //space
        for (let j = 1; j <= (i - 1); ++j) {
            process.stdout.write(` `)
        }
        //star
        for (let j = 1; j <= (2 * n + 1) - 2 * i; ++j) {
            process.stdout.write(`*`)
        }
        //space
        for (let j = 1; j <= (i - 1); ++j) {
            process.stdout.write(` `)
        }
        console.log()
    }
}

function pattern9(n) {
    pattern7(n)
    pattern8(n)
}

function pattern10(n) {
    for (let i = 1; i <= 2 * n - 1; ++i) {
        let starPrint = i
        for (let j = 1; j <= starPrint; ++j) {
            process.stdout.write(`*`)
            if (i > n) {
                starPrint = 2 * n - i
            }
        }
        console.log()
    }
}

function pattern11(n) {
    let num = 1
    for (let i = 1; i <= n; ++i) {
        if (i % 2 !== 0) {
            num = 1
        }
        else {
            num = 0
        }
        for (let j = 1; j <= i; ++j) {
            process.stdout.write(`${num}`)
            num = 1 - num
        }
        console.log()
    }
}

function pattern12(n) {
    let interval = 2 * n - 2
    for (let i = 1; i <= n; ++i) {
        //string of numbers
        for (let j = 1; j <= i; ++j) {
            process.stdout.write(`${j}`)
        }
        //spaces
        for (let j = 1; j <= interval; ++j) {
            process.stdout.write(` `)
        }
        //reverse string of numbers
        for (let j = i; j >= 1; --j) {
            process.stdout.write(`${j}`)
        }
        interval -= 2
        console.log()

    }
}

function pattern13(n) {
    let counter = 0
    for (let i = 1; i <= n; ++i) {
        for (let j = 1; j <= i; ++j) {
            process.stdout.write(`${++counter} `)
        }
        console.log()
    }
}

function pattern14(n) {
    //in ascii the character "A" is number 65
    n += 65
    for (let i = 65; i < n; ++i) {
        for (let j = 65; j <= i; ++j) {
            process.stdout.write(`${String.fromCodePoint(j)} `)
        }
        console.log()
    }
}

function pattern15(n) {
    //in ascii the character "A" is number 65
    n += 65
    let inc = n
    for (let i = 65; i < n; ++i) {
        for (let j = 65; j < inc; ++j) {
            process.stdout.write(`${String.fromCodePoint(j)} `)
        }
        --inc
        console.log()
    }
}

function pattern16(n) {
    n += 65
    for (let i = 65; i < n; ++i) {
        for (let j = 65; j <= i; ++j) {
            process.stdout.write(`${String.fromCodePoint(i)} `)
        }
        console.log()
    }
}

function pattern17(n) {
    let currentChar = 65
    for (let i = 0; i < n; ++i) {
        //spaces
        for (let j = 0; j < n - i - 1; ++j) {
            process.stdout.write(` `)
        }
        //letters
        for (let j = 0; j < (2 * i + 1); ++j) {
            process.stdout.write(`${String.fromCodePoint(currentChar)}`)

            if (j >= Math.round(2 * i + 1) / 2) {
                --currentChar
            } else {
                ++currentChar
            }
        }
        //spaces
        for (let j = 0; j < n - i - 1; ++j) {
            process.stdout.write(` `)
        }
        console.log()
    }
}

function pattern18(n) {
    let E = 69
    let threshold = 69
    let j = 69
    for (let i = 0; i < n; i++) {
        j = E - i
        for (j; j <= threshold; ++j) {
            process.stdout.write(`${String.fromCharCode(j)} `)
        }
        console.log()
    }
}

function pattern19(n) {
    for (let i = 1; i <= n; ++i) {
        //stars
        for (let j = 1; j <= n - (i - 1); ++j) {
            process.stdout.write(`*`)
        }
        //spaces
        for (let j = 1; j <= (2 * i) - 2; ++j) {
            process.stdout.write(` `)
        }
        //stars
        for (let j = 1; j <= n - (i - 1); ++j) {
            process.stdout.write(`*`)
        }
        console.log()
    }
    //inverted symmetry
    for (let i = 1; i <= n; ++i) {
        //star
        for (let j = 1; j <= i; ++j) {
            process.stdout.write(`*`)
        }
        //spaces
        for (let j = 1; j <= (2 * n) - (2 * i); ++j) {
            process.stdout.write(` `)
        }
        //star
        for (let j = 1; j <= i; ++j) {
            process.stdout.write(`*`)
        }
        console.log()
    }
}

function pattern20(n) {
    let spaces = 2 * n - 2
    for (let i = 1; i <= n; ++i) {
        //stars
        for (let j = 1; j <= i; ++j) {
            process.stdout.write(`*`)
        }
        //spaces
        for (let j = 1; j <= spaces; ++j) {
            process.stdout.write(` `)
        }
        //stars
        for (let j = 1; j <= i; ++j) {
            process.stdout.write(`*`)
        }
        spaces = spaces - 2
        console.log()


    }

    //inverse symmetry 
    m = n - 1
    for (let i = 1; i <= m; ++i) {
        //stars
        for (let j = 1; j <= m - (i - 1); ++j) {
            process.stdout.write(`*`)
        }
        //spaces
        for (let j = 1; j <= 2 * i; ++j) {
            process.stdout.write(` `)
        }
        //stars
        for (let j = 1; j <= m - (i - 1); ++j) {
            process.stdout.write(`*`)
        }
        console.log()
    }
}

function pattern21(n) {
    for (let i = 1; i <= n; ++i) {
        for (let j = 1; j <= n; ++j) {
            if (i === 1 || i === 4 || j === 1 || j === 4) {
                process.stdout.write(`*`)
            } else {
                process.stdout.write(` `)
            }
        }
        console.log()
    }
}

function pattern22(n) {
    for (let i = 0; i < (2 * n) - 1; ++i) {
        for (let j = 0; j < (2 * n) - 1; ++j) {
            let top = i
            let left = j
            let right = (2 * n - 2) - j
            let bottom = (2 * n - 2) - i
            const output = n - Math.min(Math.min(top, bottom), Math.min(left, right))
            process.stdout.write(` ${output} `)
        }
        console.log()
    }
}

// console.log()
pattern21(4)
