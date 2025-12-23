package io.github.luukdg.twa;

public class DelegationService extends
        com.google.androidbrowserhelper.trusted.DelegationService {
    @Override
    public void onCreate() {
        super.onCreate();
        // remove or comment out Play Billing code
        // registerExtraCommandHandler(new DigitalGoodsRequestHandler(getApplicationContext()));
    }
}
