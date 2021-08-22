package com.business.usermanager.bean;

import lombok.Data;

import java.util.List;

@Data
public class TravelRes {
    private String code;
    private String msg;

    private List<Travel> travelSchedules;
}
