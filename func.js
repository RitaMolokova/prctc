function Task1 (a, b)
{
    if (a%2==0 && b%2==0){
        document.write("Оба числа чётные! Вот их произведение: "+ (a*b))
    }
    else if (a%2==1 && b%2==1){
        document.write("Оба числа нечётные! Вот их сумма: "+ (a+b))
    }
    else if (a%2==0 && b%2==1){
        document.write("Второе число нечётное! Вот оно: "+ b)
    }
    else if (a%2==1 && b%2==0){
        document.write("Первое число нечётное! Вот оно: "+ a)
    }
}