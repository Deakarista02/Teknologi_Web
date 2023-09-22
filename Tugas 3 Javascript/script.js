function calculate() {
    const operation = document.getElementById('operation').value;
    const resultText = document.getElementById('result');
    
    let result = 0;

    switch (operation) {
        case 'fibonacci':
            const n = parseInt(document.getElementById('fibonacciInput').value);

            if (isNaN(n)) {
                alert('Masukkan angka yang valid.');
                return;
            }

            if (n <= 1) {
                result = n;
            } else {
                let a = 0;
                let b = 1;
                for (let i = 2; i <= n; i++) {
                    result = a + b;
                    a = b;
                    b = result;
                }
            }
            break;

        case 'VolumeKubus':
            const sisi1 = parseFloat(document.getElementById('kubussisi1').value);
            const sisi2 = parseFloat(document.getElementById('kubussisi2').value);
            const sisi3 = parseFloat(document.getElementById('kubussisi3').value);

            if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) {
                alert('Masukkan angka yang valid untuk sisi-sisi pada kubus.');
                return;
            }

            result = sisi1 * sisi2 * sisi3;
            break;

        case 'volumeTabung':
            const jariJari = parseFloat(document.getElementById('tabungJari').value);
            const tinggiTabung = parseFloat(document.getElementById('tabungTinggi').value);

            if (isNaN(jariJari) || isNaN(tinggiTabung)) {
                alert('Masukkan angka yang valid untuk jari-jari dan tinggi tabung.');
                return;
            }

            result = Math.PI * Math.pow(jariJari, 2) * tinggiTabung;
            break;
    }

    resultText.textContent = 'Hasil: ' + result;
}
document.getElementById('operation').addEventListener('change', function () {
    const operation = this.value;
    const inputFields = document.getElementsByClassName('input-fields');
    for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].style.display = 'none';
    }
    document.getElementById(operation + 'Fields').style.display = 'block';
});
