let i = 0;
while (i != 10) {
  i += 0.2;
}

//this is infinite loop beacuse of the floating point precsion error
//Instead of i reaching exactly 10, it might become something like 9.99999999999 or 10.00000000001.
