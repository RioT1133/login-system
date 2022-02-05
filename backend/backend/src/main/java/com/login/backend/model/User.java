package com.login.backend.model;

public class User {
    private final int UID;
    private final String user;

    public User(int UID, String user) {
        this.UID = UID;
        this.user = user;
    }

    public int getUID() {
        return this.UID;
    }

    public String getUser() {
        return this.user;
    }

}
