<?php
    $date = '2002-11-25';
    $bank_data = [
        'Eesti Pank',
        'Leedu Pank'
    ]
?>
<!DOCTYPE html>
<html lang="en">
<link href="Calkulator.css" rel="stylesheet">

<h2>Currency Calculator</h2>
<body>
    
    <div></div>
    <div>
        <input type="date" value="2002-11-25" id="date" onChange="displaycal(this.value)">
        <select name="banks" id="banks" onChange="displaycal(document.getElementById('date').value)">
            <?php foreach ($bank_data as $bank) echo("<option value='$bank'>$bank</option>"); ?>
        </select>
        <br>
        <input type="number" id="nummmber">
        <select name="currencies" id="currencies"></select>
        <input type="button" value="convert" id="convertBtn" onClick="cconvert()">
        <h3 id="converted"></h3>
    </div>
</body>
<div >
    <table class="fl-table" id="rateTable">
    <tr>
                <th>Currency</th>
                <th>Rate</th>
            </tr>
        <tbody>
        <tr>
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
        </tr>
        <tbody>
    </table>
</div>

<script src="Calkulator.js"></script>
</html>
