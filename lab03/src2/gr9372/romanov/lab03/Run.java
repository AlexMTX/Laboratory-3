package gr9372.romanov.lab03;

import gr9372.romanov.lab03.holder.ArrayHolder;
import gr9372.romanov.lab03.implementation.*;

import java.util.*;

public class Run {

    /**
     * @param args
     */
    public static void main(String[] args) {
        List<Integer> data = Arrays.asList(1, 3, 2, 4, 5, 6, 7, 8, 9, 10);
        ArrayHolder arrayHolder = new ArrayHolder(data);

        Scanner sc = new Scanner(System.in);
        System.out.println("Какие элементы обрабатывать: 1 - Ченые; 2 - Нечетные;");
        switch (sc.nextInt()) {
        case 1:
            arrayHolder.setSelector(new SelectorEven());
            break;
        case 2:
            arrayHolder.setSelector(new SelectorOdd());
            break;
        }

        System.out.println("Операция: 1 - Прибавление двойки; 2 - Умножение на три;");
        switch (sc.nextInt()) {
        case 1:
            arrayHolder.setProccesor(new ProcessPlus());
            break;
        case 2:
            arrayHolder.setProccesor(new ProcessMultiply());
            break;
        }

        System.out.println("Вывод: 1 - В строку; 2 - В столбец;");
        switch (sc.nextInt()) {
        case 1:
            arrayHolder.setFormatter(new FormatterRow());
            break;
        case 2:
            arrayHolder.setFormatter(new FormatterColumn());
            break;
        }

        // data.set(0,100);
        // if (data.equals(arrayHolder.getData())) {
        // System.out.println("ArrayHolder реализован неправильно");
        // }

        arrayHolder.process();
    }

}
