package gr9372.romanov.lab03.implementation;

import java.util.Iterator;

import gr9372.romanov.lab03.holder.Selector;

/**
 * Абстрактный класс с реализацией метода setIterator. Конкретные реализации
 * алгоритмов выбора наследуются от него.
 */

public abstract class SelectorAbstract implements Selector {

    protected Iterator<Integer> iterator;

    @Override
    public void setIterator(Iterator<Integer> iterator) {
        this.iterator = iterator;
    }

}
