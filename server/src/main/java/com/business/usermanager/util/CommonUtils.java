package com.business.usermanager.util;

import java.util.UUID;

public class CommonUtils {
    public static String generateUUID() {
        String uuid = UUID.randomUUID().toString().trim().replaceAll("-", "");
        return uuid;
    }
}
