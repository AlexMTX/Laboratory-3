package gr9372.romanov.lab03.tests;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import junit.framework.Assert;

import org.junit.Test;

import gr9372.romanov.lab03.holder.Selector;
import gr9372.romanov.lab03.implementation.SelectorEven;

public class TestSelectorEven {

    @Test
    public void allEven() {
        Selector selector = new SelectorEven();
        List<Integer> data = Arrays.asList(2, 4, 6);
        List<Integer> dataEven = Arrays.asList(2, 4, 6);
        List<Integer> result = new ArrayList<Integer>();
        selector.setIterator(data.iterator());

        selector.setIterator(data.iterator());
        while (selector.hasNext()) {
            Integer elem = selector.next();
            if (elem != null) {
                result.add(elem);
            }
        }

        Assert.assertTrue(result.containsAll(dataEven) && result.size() == 3);
    }

    @Test
    public void oneEven() {
        Selector selector = new SelectorEven();
        List<Integer> data = Arrays.asList(1, 2);
        List<Integer> dataEven = Arrays.asList(2);
        List<Integer> result = new ArrayList<Integer>();
        selector.setIterator(data.iterator());

        selector.setIterator(data.iterator());
        while (selector.hasNext()) {
            Integer elem = selector.next();
            if (elem != null) {
                result.add(elem);
            }
        }

        Assert.assertTrue(result.containsAll(dataEven) && result.size() == 1);
    }

    @Test
    public void noEven() {
        Selector selector = new SelectorEven();
        List<Integer> data = Arrays.asList(1, 3, 5);
        List<Integer> result = new ArrayList<Integer>();
        selector.setIterator(data.iterator());

        selector.setIterator(data.iterator());
        while (selector.hasNext()) {
            Integer elem = selector.next();
            if (elem != null) {
                result.add(elem);
            }
        }

        Assert.assertTrue(result.size() == 0);
    }

    @Test
    public void noNext() {
        Selector selector = new SelectorEven();
        List<Integer> data = Arrays.asList();
        selector.setIterator(data.iterator());

        Assert.assertFalse(selector.hasNext());
    }

    @Test
    public void hasNext() {
        Selector selector = new SelectorEven();
        List<Integer> data = Arrays.asList(1, 2, 3, 4);
        selector.setIterator(data.iterator());

        Assert.assertTrue(selector.hasNext());
    }
}
