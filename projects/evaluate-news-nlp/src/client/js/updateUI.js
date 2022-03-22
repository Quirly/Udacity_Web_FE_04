// this function updates the UI after the API call and posts results

function updateUI(polarity, agreement, subjectivity, confidence, irony) {
    document.getElementById('polarity').innerText = '1 - Polarity:  ' + polarity
    document.getElementById('agreement').innerText = '2 - Agreement: ' + agreement
    document.getElementById('subjectivity').innerText = '3 - Subjectivity: ' + subjectivity
    document.getElementById('confidence').innerText = '4 - Confidence: ' + agreement
    document.getElementById('irony').innerText = '5 - Irony: ' + subjectivity
}

export { updateUI }