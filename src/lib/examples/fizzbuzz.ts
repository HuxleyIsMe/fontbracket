export const go = `package main

import (
	"fmt"
	"strconv"
)

// this is a comment
func main() {
	for i := 1; i <= 100; i++ {
		msg := ""

		if i%3 == 0 {
			msg += "Crackle"
		}

		if i%5 == 0 {
			msg += "Pop"
		}

		if msg == "" {
			msg = strconv.Itoa(i)
		}

		fmt.Println(msg)
	}

	letters := "abcdefghijklmnopqrstuvwxyz"
	LETTERS := "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

	nums := 9876543210.0123456789

	if nums <= 3 || nums >= 5 && nums != 6 {
		fmt.Println(letters, nums, LETTERS)
	} else if nums < 100 || nums > 1000 {
		fmt.Println("weird")
	}

	// these can all look too similar sometimes
	oO0 := "lower case o, upper case O, number 0"
	l1I := "lower case l, number 1, upper case I"
}`;

export const js = `const cracklepop = () => {
	// this is a comment
	/* this is also a comment
	spanning multiple lines */
	for (let i = 1; i <= 100; i++) {
		let msg = ""

		if (i % 3 === 0) {
			msg += 'Crackle';
		}

		if (i % 5 === 0) {
			msg += 'Pop';
		}

		if (msg === '') {
			msg = i.toString();
		}

		console.log(msg);
	}
}

const letters = "abcdefghijklmnopqrstuvwxyz";
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let nums = 9876543210.0123456789;

if (nums <= 3 || nums >= 5 && nums !== 6) {
	console.log(letters, nums, LETTERS);
} else if (nums < 100 || nums > 1000) {
	console.log("weird");
}

// these can all look too similar sometimes
const oO0 = "lower case o, upper case O, number 0";
const l1I = "lower case l, number 1, upper case I";`;

export const python = `# this is a comment
def cracklepop(number):
    """This is a doc comment
    spanning multiple lines.
    """
    for current_number in range(1, number + 1):
        msg = ""
        if current_number % 3 == 0:
            msg += "Crackle"
        if current_number % 5 == 0:
            msg += "Pop"
        if msg == "":
            msg = f"{current_number}"
        print(msg)


letters = "abcdefghijklmnopqrstuvwxyz"
LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

nums = 9876543210.0123456789

if nums <= 3 or nums >= 5 and nums != 6:
    print(letters, nums, LETTERS)
elif nums < 100 or nums > 100:
    print("weird")

# these can all look too similar sometimes
oO0 = "lower case o, upper case O, number 0"
l1I = "lower case l, number 1, upper case I"`;

export const rust = `fn main() {
    for i in 1..=100 {
        let mut msg = String::new();

        if i % 3 == 0 {
            msg.push_str("Crackle");
        }

        if i % 5 == 0 {
            msg.push_str("Pop");
        }

        if msg.is_empty() {
            msg = i.to_string();
        }

        println!("{}", msg);
    }

    let letters = "abcdefghijklmnopqrstuvwxyz";
    let letters_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let nums = 9876543210.0123456789;

    if nums <= 3.0 || (nums >= 5.0 && nums != 6.0) {
        println!("{} {} {}", letters, nums, letters_upper);
    }

    // these can all look too similar sometimes
    let oO0 = "lower case o, upper case O, number 0";
    let l1I = "lower case L, number 1, upper case I";
}`;
