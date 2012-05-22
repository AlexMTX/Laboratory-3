package gr9372.romanov.lab03.tests;

import org.junit.Assert;
import org.junit.Test;

import gr9372.romanov.lab03.holder.Processor;
import gr9372.romanov.lab03.implementation.ProcessPlus;

public class TestProcessPlus {

    @Test
    public void TestPlus() {
        Processor proc = new ProcessPlus();
        Assert.assertEquals(4, proc.process(2));
    }
}
