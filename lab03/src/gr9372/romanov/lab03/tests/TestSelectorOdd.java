package gr9372.romanov.lab03.tests;

import gr9372.romanov.lab03.holder.Selector;
import gr9372.romanov.lab03.implementation.SelectorEven;
import gr9372.romanov.lab03.implementation.SelectorOdd;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.NoSuchElementException;

import junit.framework.Assert;

import org.junit.Test;

public class TestSelectorOdd {

    @Test
    public void allOdd() {
        Selector selector = new SelectorOdd();
        List<Integer> data = Arrays.asList(1, 3, 5);
        List<Integer> dataOdd = Arrays.asList(1, 3, 5);
        List<Integer> result = new ArrayList<Integer>();
        selector.setData(data);

        selector.setData(data);
        while (selector.hasNext()) {
            Integer elem = selector.next();
            result.add(elem);
        }

        Assert.assertTrue(result.containsAll(dataOdd));
        Assert.assertEquals(3, result.size());
    }

    @Test
    public void oneOdd() {
        Selector selector = new SelectorOdd();
        List<Integer> data = Arrays.asList(1, 2);
        List<Integer> dataOdd = Arrays.asList(1);
        List<Integer> result = new ArrayList<Integer>();
        selector.setData(data);

        selector.setData(data);
        while (selector.hasNext()) {
            Integer elem = selector.next();
            result.add(elem);
        }

        Assert.assertTrue(result.containsAll(dataOdd));
        Assert.assertEquals(1, result.size());
    }

    @Test
    public void noOdd() {
        Selector selector = new SelectorOdd();
        List<Integer> data = Arrays.asList(2, 4, 6);
        List<Integer> result = new ArrayList<Integer>();
        selector.setData(data);

        selector.setData(data);
        while (selector.hasNext()) {
            Integer elem = selector.next();
            result.add(elem);
        }

        Assert.assertEquals(0, result.size());
    }

    @Test
    public void noNext() {
        Selector selector = new SelectorOdd();
        List<Integer> data = Arrays.asList();
        selector.setData(data);

        Assert.assertFalse(selector.hasNext());
    }

    @Test(expected = NoSuchElementException.class)
    public void noNextException() {
        Selector selector = new SelectorEven();
        List<Integer> data = Arrays.asList();
        selector.setData(data);

        selector.next();
    }
    
    @Test
    public void hasNext() {
        Selector selector = new SelectorOdd();
        List<Integer> data = Arrays.asList(1, 2, 4, 6);
        selector.setData(data);
        selector.next();

        Assert.assertFalse(selector.hasNext());
    }

}
