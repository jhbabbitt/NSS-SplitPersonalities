const originalDisorderFormat =
  'Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia'

disorderArray = originalDisorderFormat.split('|$|')

const disorderHTML = disorderArray.join('</div><div>')
console.log(`<div>${disorderHTML}</div>`)