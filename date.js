var string = '';

for (var i = 1; i < 32; i++) {
  string += `
  <div class="month-grid-date-item">
<input class="month-grid-date-input hide-input" type="radio" name="month-grid-date" id="month-grid-date-input-${i}"/>
<label class="month-grid-date-label" for="month-grid-date-input-${i}">
  <div class="hkb-label-centered-text">${i}</div>
</label>
</div>
`;
}

console.log(string);