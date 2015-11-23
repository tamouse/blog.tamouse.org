---
layout: page
title: "Security Concerns"
---
Some security concerns:

1. [Password Management][password-management]
2. [Implementing Password Recovery][implementing-password-recovery]
3. [Strong Passwords][strong-passwords]

<a name="one-line-password-generator"></a>

## A one-line password generator

This is a simple, one line shell statement to generate a random password:

    cat /dev/urandom | strings | grep -o '[[:alnum:]!@%_-+=., ]' | head -n 15 | tr -d '\n'

which gives something like:

    oJhh!j0bNAiZNDa



[password-management]: http://stackoverflow.com/questions/270485/password-management-best-practices-soup-to-nuts-not-just-storage-or-generation "Password Management"
[implementing-password-recovery]: /pages/swaac/security-concerns/implementing-password-recovery "Implementing Password Recovery" 
[strong-passwords]: /pages/swaac/security-concerns/strong-passwords/ "Strong Passwords"
