const balance = [1000];
const cash_arr = [1000];
const history = ['1, Current account balance: 1000, Current cash balance: 1000'];

function refresh_history(){
    update_history();
    show_history();
}
function check_update_show_value(){
    let bal = document.getElementById('curr-bal').value;
    let cash = document.getElementById('curr-cash').value;
    if (bal !== ""){
        update_bal(bal);
    }
    if (cash !== ""){
        update_cash(cash);
    }
    refresh_history();
}

function update_bal(bal){
    balance.push(Number(bal));
}

function update_cash(cash){
    cash_arr.push(Number(cash));
}

function update_history(){
    txt = history.length + 1 + ', Current account balance: ' + balance.at(-1) +
    ', Current cash balance: ' + cash_arr.at(-1);
    history.push(txt);
}

function show_history(){
    document.getElementById('history-area').innerHTML += history.at(-1) + '\n';
}

function oper(){
    let opertype = document.getElementById('oper-type').value;
    let val = Number(document.getElementById('oper-input').value);
    if (opertype === 'deposit'){
        if (cash_arr.at(-1) < val){
            history.push('Couldn\'t deposit entered balance. (Insuffcient cash balance)');
            document.getElementById('history-area').innerHTML += history.length + ', ' + history.at(-1) + '\n';
        }
        else{
            let bal_val = val;
            let cash_val = cash_arr.at(-1) - val;
            bal_val += balance.at(-1);
            balance.push(bal_val);
            cash_arr.push(cash_val);
            refresh_history();
        }
    }
    else if (opertype === 'withdraw'){
        if (balance.at(-1) < val){
            history.push('Couldn\'t withdraw entered balance. (Insuffcient account balance)')
            document.getElementById('history-area').innerHTML += history.length + ', ' + history.at(-1) + '\n';
        }
        else{
            let bal_val = balance.at(-1) - val;
            let cash_val = cash_arr.at(-1) + val;
            balance.push(bal_val);
            cash_arr.push(cash_val);
            refresh_history();
        }
    }
}