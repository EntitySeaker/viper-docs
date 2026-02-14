---
title: bash
description: X documentation.
sidebar:
    order: 3
---

# Bash User Handbook
## Your Complete Guide to Writing Scripts in X

**Welcome!** This handbook teaches you how to write bash scripts in X, even if you've never programmed before. You'll start with simple scripts and work your way up to powerful automation tools.

---

## Table of Contents

1. [What Are Bash Scripts?](#what-are-bash-scripts)
2. [Your First Script](#your-first-script)
3. [Working with Variables](#working-with-variables)
4. [Getting User Input](#getting-user-input)
5. [Making Decisions (If/Else)](#making-decisions-ifelse)
6. [Repeating Actions (Loops)](#repeating-actions-loops)
7. [Creating Functions](#creating-functions)
8. [Working with Lists](#working-with-lists)
9. [Math Operations](#math-operations)
10. [Working with Files](#working-with-files)
11. [Network Operations](#network-operations)
12. [Useful Built-in Functions](#useful-built-in-functions)
13. [Common Script Examples](#common-script-examples)
14. [Tips & Tricks](#tips--tricks)
15. [Troubleshooting](#troubleshooting)

---

## What Are Bash Scripts?

**Bash scripts** are files that contain a series of commands that execute automatically. Instead of typing commands one by one, you write them once in a script and run them anytime!

### Why Use Scripts?

- 🚀 **Automation**: Run complex tasks with one command
- 💾 **Reusability**: Write once, use many times
- 🎯 **Consistency**: Do things the same way every time
- ⏱️ **Speed**: Execute 100 commands instantly
- 🔄 **Loops**: Repeat actions without repetition

### How Scripts Work

1. You write commands in a text file
2. Save the file in your bash directory
3. Run it with `run scriptname`
4. The script executes all commands automatically

---

## Your First Script

Let's create your very first script!

### Hello World

Create a file called `hello` in your bash directory:

```bash
// My first script!
bash_print Hello, World!
```

**Run it:**
```bash
run hello
```

**Output:**
```
Hello, World!
```

🎉 **Congratulations!** You just wrote and ran your first script!

### Simple Greeter

Now let's make it interactive:

```bash
// Simple greeter script
bash_print Hello! What's your name?
set_var(name, get_string(Your name:))
bash_print Nice to meet you, get_var(name)!
```

**What happens:**
1. Prints "Hello! What's your name?"
2. Asks you to type your name
3. Stores your name in a variable called `name`
4. Prints a personalized greeting

**Try it:**
```bash
run hello
```

**Output:**
```
Hello! What's your name?
Your name: Alice
Nice to meet you, Alice!
```

---

## Working with Variables

Variables store information you want to use later. Think of them as labeled boxes.

### Creating Variables

Use `set_var(name, value)` to create a variable:

```bash
set_var(username, Alice)
set_var(age, 25)
set_var(score, 98.5)
```

### Using Variables

Use `get_var(name)` to get the value back:

```bash
bash_print Your name is get_var(username)
bash_print You are get_var(age) years old
bash_print Your score: get_var(score)
```

### Complete Example

```bash
// User profile script
set_var(name, John)
set_var(age, 30)
set_var(city, New York)

bash_print === USER PROFILE ===
bash_print Name: get_var(name)
bash_print Age: get_var(age)
bash_print City: get_var(city)
```

**Output:**
```
=== USER PROFILE ===
Name: John
Age: 30
City: New York
```

### Variable Tips

💡 **Tip 1**: Use descriptive names
- Good: `username`, `total_price`, `user_age`
- Bad: `x`, `temp`, `data`

💡 **Tip 2**: Variables can hold different types
- Text: `set_var(name, Alice)`
- Numbers: `set_var(count, 42)`
- Lists: `set_var(items, [apple, banana])`

---

## Getting User Input

Make your scripts interactive by asking for input!

### Simple Text Input

```bash
set_var(answer, get_string(What's your favorite color?))
bash_print Your favorite color is get_var(answer)
```

### Number Input

```bash
set_var(age, get_integer(How old are you?))
bash_print You are get_var(age) years old
```

### Decimal Number Input

```bash
set_var(price, get_decimal(Enter price:))
bash_print The price is $get_var(price)
```

### Complete Input Example

```bash
// User registration script
bash_print === REGISTRATION ===

set_var(username, get_string(Username:))
set_var(email, get_string(Email:))
set_var(age, get_integer(Age:))

bash_print
bash_print Registration Complete!
bash_print Username: get_var(username)
bash_print Email: get_var(email)
bash_print Age: get_var(age)
```

---

## Making Decisions (If/Else)

Use `if` statements to make your script do different things based on conditions.

### Basic If

```bash
set_var(age, 20)

if get_var(age) >= 18
  bash_print You are an adult
endif
```

### If with Else

```bash
set_var(score, 75)

if get_var(score) >= 60
  bash_print You passed!
else
  bash_print You failed
endif
```

### If with Multiple Choices

```bash
set_var(score, 85)

if get_var(score) >= 90
  bash_print Grade: A - Excellent!
elif get_var(score) >= 80
  bash_print Grade: B - Good job!
elif get_var(score) >= 70
  bash_print Grade: C - Passing
else
  bash_print Grade: F - Need to study more
endif
```

### Comparison Operators

Use these to compare values:

- `==` - Equal to
- `!=` - Not equal to
- `<` - Less than
- `>` - Greater than
- `<=` - Less than or equal
- `>=` - Greater than or equal

### Combining Conditions

Use `and` and `or` to combine multiple conditions:

```bash
// Checking eligibility
set_var(age, 25)
set_var(has_license, 1)

if get_var(age) >= 18 and get_var(has_license) == 1
  bash_print You can drive!
else
  bash_print You cannot drive yet
endif
```

### Real-World Example: Login System

```bash
// Simple login script
set_var(username, get_string(Username:))
set_var(password, get_string(Password:))

if get_var(username) == admin and get_var(password) == secret123
  bash_print green(Login successful!)
  bash_print Welcome back, admin!
else
  bash_print red(Login failed!)
  bash_print Invalid username or password
endif
```

---

## Repeating Actions (Loops)

Loops let you repeat actions without writing the same code over and over.

### For Loop - Simple List

```bash
// Print each fruit
for fruit in [Apple, Banana, Cherry]
  bash_print I like get_var(fruit)
endfor
```

**Output:**
```
I like Apple
I like Banana
I like Cherry
```

### For Loop - Counting

```bash
// Count from 1 to 5
for i in range(1, 5)
  bash_print Count: get_var(i)
endfor
```

**Output:**
```
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
```

### While Loop

Repeat while a condition is true:

```bash
set_var(count, 1)

while get_var(count) <= 5
  bash_print Number: get_var(count)
  set_var(count, get_var(count) + 1)
endwhile
```

### Until Loop

Repeat until a condition becomes true:

```bash
set_var(tries, 0)

until get_var(tries) >= 3
  bash_print Attempt: get_var(tries)
  set_var(tries, get_var(tries) + 1)
enduntil
```

### Real-World Example: Menu System

```bash
// Simple menu
set_var(running, 1)

while get_var(running) == 1
  bash_print
  bash_print === MENU ===
  bash_print 1. Say Hello
  bash_print 2. Show Date
  bash_print 3. Exit
  
  set_var(choice, get_integer(Choose:))
  
  if get_var(choice) == 1
    bash_print Hello there!
  elif get_var(choice) == 2
    bash_print Current time: timestamp()
  elif get_var(choice) == 3
    bash_print Goodbye!
    set_var(running, 0)
  else
    bash_print Invalid choice
  endif
endwhile
```

### Breaking Out Early

Use `break` to exit a loop:

```bash
// Find a number
for i in range(1, 100)
  if get_var(i) == 50
    bash_print Found it!
    break
  endif
endfor
```

Use `continue` to skip to the next iteration:

```bash
// Print only even numbers
for i in range(1, 10)
  set_var(remainder, get_var(i) % 2)
  if get_var(remainder) != 0
    continue
  endif
  bash_print get_var(i) is even
endfor
```

---

## Creating Functions

Functions are reusable blocks of code with a name. Write once, use anywhere!

### Simple Function

```bash
// Define the function
func greet
  bash_print Hello from my function!
endfunc

// Use the function
greet
greet
greet
```

**Output:**
```
Hello from my function!
Hello from my function!
Hello from my function!
```

### Function with Parameters

```bash
// Function that says hello to someone
func say_hello(name)
  bash_print Hello, get_var(name)!
  bash_print Nice to meet you!
endfunc

// Use it with different names
say_hello(Alice)
say_hello(Bob)
say_hello(Charlie)
```

**Output:**
```
Hello, Alice!
Nice to meet you!
Hello, Bob!
Nice to meet you!
Hello, Charlie!
Nice to meet you!
```

### Function That Returns a Value

```bash
// Calculate area
func calculate_area(width, height)
  set_var(area, get_var(width) * get_var(height))
  return_value get_var(area)
endfunc

// Use the function
set_var(room_area, calculate_area(10, 15))
bash_print Room area: get_var(room_area) square feet
```

### Real-World Example: Password Validator

```bash
// Password validator function
func validate_password(password)
  set_var(length, len(get_var(password)))
  
  if get_var(length) < 8
    bash_print red(Password too short!)
    return_value 0
  endif
  
  if get_var(length) > 20
    bash_print red(Password too long!)
    return_value 0
  endif
  
  bash_print green(Password valid!)
  return_value 1
endfunc

// Use the validator
set_var(pw, get_string(Enter password:))
set_var(is_valid, validate_password(get_var(pw)))

if get_var(is_valid) == 1
  bash_print Creating account...
else
  bash_print Please try again
endif
```

---

## Working with Lists

Lists (arrays) store multiple values in one variable.

### Creating Lists

```bash
// Empty list
set_var(items, [])

// List with values
set_var(fruits, [Apple, Banana, Cherry])
set_var(numbers, [1, 2, 3, 4, 5])
```

### Adding Items (Push)

Add items to the end of a list:

```bash
set_var(cart, [])

push_var cart Laptop
push_var cart Mouse
push_var cart Keyboard

// cart now has 3 items
```

### Removing from End (Pop)

```bash
set_var(stack, [A, B, C, D])

pop_var stack  // Removes D
pop_var stack  // Removes C

// stack now has [A, B]
```

### Removing from Start (Pull)

```bash
set_var(queue, [First, Second, Third])

pull_var queue  // Removes First

// queue now has [Second, Third]
```

### Checking List Size

```bash
set_var(items, [A, B, C])
len_var items  // Returns 3
```

### Checking if Value Exists

```bash
set_var(colors, [red, green, blue])

in_var colors blue    // Returns true
in_var colors yellow  // Returns false
```

### Looping Through Lists

```bash
set_var(fruits, [Apple, Banana, Cherry, Orange])

bash_print My favorite fruits:
for fruit in fruits
  bash_print - get_var(fruit)
endfor
```

### Real-World Example: Shopping Cart

```bash
// Shopping cart manager
set_var(cart, [])

bash_print === SHOPPING CART ===

// Add items
push_var cart Laptop
bash_print Added: Laptop

push_var cart Mouse  
bash_print Added: Mouse

push_var cart Keyboard
bash_print Added: Keyboard

// Show cart
bash_print
bash_print Your cart:
for item in cart
  bash_print - get_var(item)
endfor

// Show total items
bash_print
bash_print Total items: len(get_var(cart))

// Remove last item
pop_var cart
bash_print
bash_print Removed last item
bash_print Items remaining: len(get_var(cart))
```

---

## Math Operations

Do calculations in your scripts!

### Basic Operations

```bash
set_var(a, 10)
set_var(b, 3)

// Addition
set_var(sum, get_var(a) + get_var(b))
bash_print Sum: get_var(sum)

// Subtraction  
set_var(diff, get_var(a) - get_var(b))
bash_print Difference: get_var(diff)

// Multiplication
set_var(product, get_var(a) * get_var(b))
bash_print Product: get_var(product)

// Division
set_var(quotient, get_var(a) / get_var(b))
bash_print Quotient: get_var(quotient)

// Remainder (Modulo)
set_var(remainder, get_var(a) % get_var(b))
bash_print Remainder: get_var(remainder)

// Power
set_var(power, get_var(a) ** 2)
bash_print Power: get_var(power)
```

### Math Functions

```bash
// Absolute value
set_var(negative, -42)
set_var(positive, abs(get_var(negative)))
bash_print Absolute: get_var(positive)

// Rounding
set_var(price, 19.99)
bash_print Rounded down: floor(get_var(price))
bash_print Rounded up: ceil(get_var(price))
bash_print Rounded nearest: round(get_var(price))

// Random number
set_var(dice, random(1, 6))
bash_print You rolled: get_var(dice)

// Min and Max
bash_print Minimum: min(5, 10)
bash_print Maximum: max(5, 10)
```

### Real-World Example: Calculator

```bash
// Simple calculator
bash_print === CALCULATOR ===

set_var(num1, get_decimal(First number:))
set_var(num2, get_decimal(Second number:))

bash_print
bash_print Results:
bash_print Addition: get_var(num1) + get_var(num2) = calc(get_var(num1) + get_var(num2))
bash_print Subtraction: get_var(num1) - get_var(num2) = calc(get_var(num1) - get_var(num2))
bash_print Multiplication: get_var(num1) * get_var(num2) = calc(get_var(num1) * get_var(num2))
bash_print Division: get_var(num1) / get_var(num2) = calc(get_var(num1) / get_var(num2))

// Store the actual calculations
set_var(sum, get_var(num1) + get_var(num2))
set_var(diff, get_var(num1) - get_var(num2))
set_var(prod, get_var(num1) * get_var(num2))
set_var(quot, get_var(num1) / get_var(num2))

bash_print
bash_print Sum: get_var(sum)
bash_print Difference: get_var(diff)
bash_print Product: get_var(prod)
bash_print Quotient: get_var(quot)
```

### Real-World Example: Shopping Total

```bash
// Calculate shopping total with tax
bash_print === SHOPPING TOTAL ===

set_var(price, get_decimal(Item price:))
set_var(quantity, get_integer(Quantity:))

set_var(subtotal, get_var(price) * get_var(quantity))
set_var(tax, get_var(subtotal) * 0.08)
set_var(total, get_var(subtotal) + get_var(tax))

bash_print
bash_print Subtotal: $get_var(subtotal)
bash_print Tax (8%): $get_var(tax)
bash_print Total: $get_var(total)
```

---

## Working with Files

Read, write, and manage files in your scripts.

### Reading Files

```bash
// Read entire file
set_var(content, bash_read(/etc/passwd))
bash_print get_var(content)
```

### Writing Files

```bash
// Write to a file
bash_write myfile.txt Hello, World!

// Write variable content
set_var(message, This is my message)
bash_write output.txt get_var(message)
```

### Viewing Files

```bash
// Display file contents
bash_view /etc/passwd
```

### File Information

```bash
// Check if file exists
if file_exists(/etc/passwd)
  bash_print File exists!
else
  bash_print File not found
endif

// Check if it's a folder
if is_folder(/home)
  bash_print It's a directory
else
  bash_print It's a file
endif

// Check if it's binary
if is_binary(/bin/program)
  bash_print Binary file
else
  bash_print Text file
endif
```

### Creating Directories

```bash
bash_mkdir myfolder
bash_print Created folder: myfolder
```

### Navigation

```bash
// Change directory
bash_cd /home/user

// Show current directory
bash_pwd

// Show current user
bash_print Current user: bash_whoami
```

### Finding Files

```bash
// Find files by name
bash_find /home myfile

// Search file contents
bash_find /home password -c

// Exact filename match
bash_find /var config.txt -e
```

### Real-World Example: Log File Analyzer

```bash
// Read and analyze a log file
bash_print === LOG ANALYZER ===

set_var(logfile, get_string(Log file path:))

if file_exists(get_var(logfile))
  set_var(content, bash_read(get_var(logfile)))
  set_var(size, len(get_var(content)))
  
  bash_print File: get_var(logfile)
  bash_print Size: get_var(size) characters
  bash_print
  bash_print Contents:
  bash_view get_var(logfile)
else
  bash_print red(Error:) File not found!
endif
```

### Real-World Example: Backup Script

```bash
// Simple backup script
bash_print === BACKUP TOOL ===

set_var(filename, get_string(File to backup:))

if file_exists(get_var(filename))
  // Read the file
  set_var(content, bash_read(get_var(filename)))
  
  // Create backup with timestamp
  set_var(backup_name, concat(get_var(filename), .backup))
  bash_write get_var(backup_name) get_var(content)
  
  bash_print green(Success!) Backed up to get_var(backup_name)
else
  bash_print red(Error:) File not found!
endif
```

---

## Network Operations

Scan and interact with networks (Grey Hack specific).

### Scan for Open Ports

```bash
// Scan an IP address
bash_scanner 192.168.1.1
```

### List LAN Devices

```bash
// Show all devices on local network
bash_lan_devices 192.168.1.1
```

### Show Router Information

```bash
// Display router details
bash_router_info 192.168.1.1
```

### Show Device Ports

```bash
// Show ports for a specific device
bash_device_ports 192.168.1.1 192.168.1.10
```

### Show Firewall Rules

```bash
// Display firewall configuration
bash_firewall_rules 192.168.1.1
```

### Check if Host is Reachable

```bash
// Ping a host
ping_host 192.168.1.1
```

### Check if Port is Open

```bash
// Test specific port
port_open 192.168.1.1 22
port_open 192.168.1.1 80
```

### Real-World Example: Network Scanner

```bash
// Complete network scanner
bash_print === NETWORK SCANNER ===

set_var(target, get_string(Target IP:))

bash_print Scanning get_var(target)...
bash_print

// Ping first
bash_print Checking if host is reachable...
ping_host get_var(target)

// Scan ports
bash_print
bash_print Scanning for open ports...
bash_scanner get_var(target)

// Show router info
bash_print
bash_print Router information:
bash_router_info get_var(target)

// List LAN devices
bash_print
bash_print LAN devices:
bash_lan_devices get_var(target)

bash_print
bash_print Scan complete!
```

---

## Useful Built-in Functions

### String Functions

```bash
// Length of string
set_var(text, Hello)
bash_print Length: len(get_var(text))

// Uppercase
bash_print Uppercase: upper(get_var(text))

// Lowercase
bash_print Lowercase: lower(get_var(text))

// Substring
set_var(sub, substr(get_var(text), 0, 3))
bash_print Substring: get_var(sub)

// Check if contains
if contains(get_var(text), ell)
  bash_print Found it!
endif

// Join list into string
set_var(words, [Hello, World])
set_var(sentence, join(get_var(words), " "))
bash_print get_var(sentence)

// Split string into list
set_var(sentence, Hello World)
set_var(words, split_str(get_var(sentence), " "))
```

### Type Checking

```bash
set_var(name, Alice)
set_var(age, 25)

bash_print Type of name: typeof(get_var(name))
bash_print Type of age: typeof(get_var(age))
```

### Type Conversion

```bash
// Convert to string
set_var(num, 42)
set_var(str, to_string(get_var(num)))

// Convert to integer
set_var(text, 123)
set_var(number, to_int(get_var(text)))

// Convert to float
set_var(decimal, to_float(3.14))
```

### Date and Time

```bash
// Current timestamp
bash_print Timestamp: timestamp()

// Current date/time
bash_print Date: date()
```

---

## Common Script Examples

### Example 1: User Registration

```bash
// User registration system
bash_print === USER REGISTRATION ===
bash_print

set_var(username, get_string(Username:))
set_var(email, get_string(Email:))
set_var(age, get_integer(Age:))

// Validation
if len(get_var(username)) < 3
  bash_print red(Error:) Username too short (min 3 characters)
  exit 1
endif

if get_var(age) < 13
  bash_print red(Error:) Must be 13 or older
  exit 1
endif

// Success
bash_print
bash_print green(Registration successful!)
bash_print
bash_print Account Details:
bash_print Username: get_var(username)
bash_print Email: get_var(email)
bash_print Age: get_var(age)
```

### Example 2: Password Generator

```bash
// Random password generator
bash_print === PASSWORD GENERATOR ===

set_var(length, get_integer(Password length (8-20):))

if get_var(length) < 8 or get_var(length) > 20
  bash_print red(Error:) Length must be between 8 and 20
  exit 1
endif

// Generate password parts
set_var(part1, random(1000, 9999))
set_var(part2, random(1000, 9999))
set_var(part3, random(100, 999))

set_var(password, concat(PASS, get_var(part1), -, get_var(part2), X, get_var(part3)))

bash_print
bash_print green(Generated password:)
bash_print get_var(password)
bash_print
bash_print Save this password securely!
```

### Example 3: To-Do List

```bash
// Simple to-do list
set_var(todos, [])
set_var(running, 1)

while get_var(running) == 1
  bash_print
  bash_print === TO-DO LIST ===
  bash_print
  bash_print 1. Add task
  bash_print 2. Show tasks
  bash_print 3. Remove last task
  bash_print 4. Exit
  
  set_var(choice, get_integer(Choose:))
  
  if get_var(choice) == 1
    set_var(task, get_string(Task name:))
    push_var todos get_var(task)
    bash_print green(Task added!)
    
  elif get_var(choice) == 2
    bash_print
    bash_print Your tasks:
    set_var(count, 0)
    for task in todos
      set_var(count, get_var(count) + 1)
      bash_print get_var(count). get_var(task)
    endfor
    
  elif get_var(choice) == 3
    pop_var todos
    bash_print yellow(Removed last task)
    
  elif get_var(choice) == 4
    bash_print Goodbye!
    set_var(running, 0)
    
  else
    bash_print red(Invalid choice)
  endif
endwhile
```

### Example 4: Number Guessing Game

```bash
// Number guessing game
bash_print === GUESS THE NUMBER ===
bash_print I'm thinking of a number between 1 and 100
bash_print

set_var(secret, random(1, 100))
set_var(tries, 0)
set_var(max_tries, 10)

while get_var(tries) < get_var(max_tries)
  set_var(tries, get_var(tries) + 1)
  set_var(remaining, get_var(max_tries) - get_var(tries) + 1)
  
  bash_print
  bash_print Try get_var(tries) of get_var(max_tries)
  set_var(guess, get_integer(Your guess:))
  
  if get_var(guess) == get_var(secret)
    bash_print
    bash_print green(CORRECT!) You found it in get_var(tries) tries!
    exit 0
  elif get_var(guess) < get_var(secret)
    bash_print blue(Too low!) Try a higher number
  else
    bash_print yellow(Too high!) Try a lower number
  endif
  
  bash_print Tries remaining: get_var(remaining)
endwhile

bash_print
bash_print red(Game Over!) The number was get_var(secret)
```

### Example 5: System Monitor

```bash
// Simple system monitor
bash_print === SYSTEM MONITOR ===
bash_print

bash_print Current Directory:
bash_pwd

bash_print
bash_print Current User:
bash_print bash_whoami

bash_print
bash_print System Context:
bash_print bash_whatami

bash_print
bash_print Running Processes:
list_processes

bash_print
bash_print Press Enter to exit
get_string()
```

---

## Tips & Tricks

### 💡 Tip 1: Use Comments Liberally

```bash
// This is a comment explaining what the script does
// Comments help you remember what each part does later

// Calculate total price
set_var(price, 19.99)
set_var(quantity, 3)
set_var(total, get_var(price) * get_var(quantity))  // Price times quantity
```

### 💡 Tip 2: Break Complex Scripts into Functions

Instead of one long script:
```bash
func validate_input(value)
  // Validation logic here
  return_value 1
endfunc

func process_data(data)
  // Processing logic here
  return_value result
endfunc

func display_results(results)
  // Display logic here
endfunc

// Main script
validate_input(mydata)
process_data(mydata)
display_results(results)
```

### 💡 Tip 3: Use Descriptive Variable Names

```bash
// Good names (clear and descriptive)
set_var(user_age, 25)
set_var(total_price, 99.99)
set_var(is_valid, 1)

// Bad names (unclear)
set_var(x, 25)
set_var(temp, 99.99)
set_var(flag, 1)
```

### 💡 Tip 4: Validate User Input

```bash
set_var(age, get_integer(Enter your age:))

if get_var(age) < 0 or get_var(age) > 150
  bash_print red(Error:) Invalid age!
  exit 1
endif

// Continue with valid age
bash_print Your age is get_var(age)
```

### 💡 Tip 5: Use Colors for Better Output

```bash
bash_print green(Success!) Operation completed
bash_print red(Error!) Something went wrong
bash_print yellow(Warning:) Please check this
bash_print blue(Info:) Just so you know
```

### 💡 Tip 6: Test Small Pieces First

Don't write a huge script all at once! Test small pieces:

```bash
// Test 1: Just the input
set_var(name, get_string(Name:))
bash_print You entered: get_var(name)

// When that works, add more...
```

### 💡 Tip 7: Use Sleep for Dramatic Effect

```bash
bash_print Preparing to launch...
sleep 1
bash_print 3...
sleep 1
bash_print 2...
sleep 1
bash_print 1...
sleep 1
bash_print green(LAUNCH!)
```

---

## Troubleshooting

### Problem: Script doesn't run

**Symptoms:** Nothing happens when you type `run scriptname`

**Solutions:**
1. Make sure the script is in your bash directory
2. Check that you're using the correct filename
3. Run without any file extension: `run scriptname` not `run scriptname.txt`

### Problem: Variable not found

**Symptoms:** Error like "variable undefined"

**Solutions:**
1. Make sure you created the variable with `set_var`
2. Check spelling - variables are case-sensitive
3. Use `get_var(name)` to retrieve values

```bash
// Wrong
set_var(username, Alice)
bash_print username  // This prints the word "username"

// Right
set_var(username, Alice)
bash_print get_var(username)  // This prints "Alice"
```

### Problem: If statement doesn't work

**Symptoms:** Wrong branch executes or nothing executes

**Solutions:**
1. Don't forget `endif` at the end
2. Use `get_var()` to access variables in conditions
3. Make sure you're using the right comparison operator

```bash
// Wrong
if get_var(age) = 18  // Single = is wrong
  bash_print Adult
endif

// Right
if get_var(age) == 18  // Use == for comparison
  bash_print Adult
endif
```

### Problem: Loop never stops

**Symptoms:** Script runs forever

**Solutions:**
1. Make sure your condition eventually becomes false
2. Check that you're updating the counter variable
3. Use `break` if you need to exit early

```bash
// Wrong - infinite loop
set_var(count, 0)
while get_var(count) < 5
  bash_print Count: get_var(count)
  // Forgot to increment count!
endwhile

// Right
set_var(count, 0)
while get_var(count) < 5
  bash_print Count: get_var(count)
  set_var(count, get_var(count) + 1)  // Increment!
endwhile
```

### Problem: Math doesn't work

**Symptoms:** Numbers add as text instead of adding mathematically

**Solutions:**
1. Make sure you're using `get_var()` for variables
2. Convert strings to numbers with `to_int()` or `to_float()`

```bash
// Wrong
set_var(a, "10")
set_var(b, "20")
set_var(sum, get_var(a) + get_var(b))  // Might concatenate as "1020"

// Right
set_var(a, 10)  // Store as number, not string
set_var(b, 20)
set_var(sum, get_var(a) + get_var(b))  // Now adds to 30
```

### Problem: File not found

**Symptoms:** Error when trying to read/write files

**Solutions:**
1. Check the file path is correct
2. Use `file_exists()` to verify before reading
3. Use absolute paths (`/home/user/file.txt`) if unsure

```bash
// Better approach
set_var(filename, /etc/passwd)

if file_exists(get_var(filename))
  set_var(content, bash_read(get_var(filename)))
  bash_print get_var(content)
else
  bash_print red(Error:) File not found!
endif
```

---

## Quick Reference

### Essential Commands

```bash
// Variables
set_var(name, value)           // Create/update variable
get_var(name)                  // Get variable value

// Input
get_string(prompt)             // Get text input
get_integer(prompt)            // Get number input
get_decimal(prompt)            // Get decimal input

// Output
bash_print message             // Print to screen

// Conditionals
if condition                   // Start if block
elif condition                 // Else if
else                          // Else block
endif                         // End if block

// Loops
for var in list               // Loop through list
for var in range(start, end)  // Loop through range
while condition               // Loop while true
endfor                        // End for loop
endwhile                      // End while loop

// Functions
func name(params)             // Define function
return_value value            // Return from function
endfunc                       // End function

// Lists
push_var list value           // Add to end
pop_var list                  // Remove from end
pull_var list                 // Remove from start
len_var list                  // Get list size

// Files
bash_read(path)               // Read file
bash_write(path, content)     // Write file
bash_view(path)               // Display file
file_exists(path)             // Check if exists
```

---

## What's Next?

🎓 **You're ready to write scripts!**

Start with simple scripts and gradually add more features:

1. **Start Simple**: Begin with input/output scripts
2. **Add Logic**: Learn if/else and loops
3. **Create Functions**: Organize reusable code
4. **Build Tools**: Make useful automation scripts
5. **Share & Learn**: Show your scripts to others!

### Need Help?

- Look at the examples in this guide
- Start simple and build up gradually
- Don't be afraid to experiment!

---

**Happy Scripting! 🚀**

Remember: Every expert was once a beginner. Start simple, practice often, and you'll be writing amazing scripts in no time!
