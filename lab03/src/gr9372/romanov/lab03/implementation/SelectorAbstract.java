package gr9372.romanov.lab03.implementation;

import java.util.List;

import gr9372.romanov.lab03.holder.Selector;

/**
 * Абстрактный класс с реализацией метода setIterator. Конкретные реализации
 * алгоритмов выбора наследуются от него.
 */

public abstract class SelectorAbstract implements Selector {

    protected List<Integer> data;

    @Override
    public void setData(List<Integer> data) {
        this.data = data;
    }

}
