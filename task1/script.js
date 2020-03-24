nextPrime:
    for (var naturalnumbers = 2; naturalnumbers <= 100; naturalnumbers++) {
         for (var previous = 2; previous < naturalnumbers; previous++) {
         if (naturalnumbers % previous == 0) continue nextPrime;
         }
        console.log(naturalnumbers);
         }

