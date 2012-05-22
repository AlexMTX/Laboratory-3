package gr9372.romanov.lab03.implementation;

import java.util.Iterator;
import java.util.NoSuchElementException;

public class SelectorEven extends SelectorAbstract {

    int position = 0;

    @Override
    public boolean hasNext() {
        Iterator<Integer> it = goToCurPosition();
        while (it.hasNext()) {
            int element = it.next();
            if (element % 2 == 0)
                return true;
        }
        return false;
    }

    @Override
    public Integer next() {
        Iterator<Integer> it = goToCurPosition();
        while (it.hasNext()) {
            int element = it.next();
            position++;
            if (element % 2 == 0)
                return element;
        }
        throw new NoSuchElementException("Next element doesn't exist");
    }

    private Iterator<Integer> goToCurPosition() {
        Iterator<Integer> it = data.iterator();
        for (int i = 0; i < position; i++) {
            it.next();
        }
        return it;
    }

    @Override
    public void remove() {
        throw new UnsupportedOperationException("Method is undefined");
    }

}
