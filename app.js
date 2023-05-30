const tableBody = document.getElementById('table-body');

let flights = [
  {
    time: '09:15',
    destinaion: 'BERLIN',
    flight: 'BX 204',
    gate: 'A 23',
    remarks: 'ON TIME'
  },
  {
    time: '09:30',
    destinaion: 'FRANKFURT',
    flight: 'FX 244',
    gate: 'A 03',
    remarks: 'ON TIME'
  },
  {
    time: '11:23',
    destinaion: 'MUNICH',
    flight: 'MX 984',
    gate: 'A 44',
    remarks: 'DELAYED'
  },
  {
    time: '12:34',
    destinaion: 'HAMBURG',
    flight: 'HX 894',
    gate: 'A 02',
    remarks: 'CANCELLED'
  },
  {
    time: '14:34',
    destinaion: 'COLOGNE',
    flight: 'CX 897',
    gate: 'A 07',
    remarks: 'CANCELLED'
  },
]

function populateTable() {
  for (const flight of flights) {
    const tableRow = document.createElement('tr')
    for (const flightDetail in flight) {
      const tableCell = document.createElement('td')
      const word = Array.from(flight[flightDetail])

      for(const letter of word) {
        const letterElement = document.createElement('div')
        letterElement.classList.add('flip')
        letterElement.textContent = letter
        tableCell.append(letterElement)
      }
      tableRow.append(tableCell)
    }

    tableBody.append(tableRow)
  }
}

populateTable();

