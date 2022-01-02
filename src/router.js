import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/personal/HomePage.vue'
import BizPage from './pages/business/BizPage.vue'
import NotFound from './pages/NotFound.vue'
import LoGin from './pages/personal/LoginPage.vue'
import ForgotPassword from './pages/personal/ForgotPassword.vue'
import SignUp from './pages/personal/SignUp.vue'
import InvestPage from './pages/personal/InvestPage.vue'
import StockInvest from './pages/personal/StockInvest.vue'
import CryptoInvest from './pages/personal/CryptoInvest.vue'
import PropertyInvest from './pages/personal/PropertyInvest.vue'
import EquityInvest from './pages/personal/EquityInvest.vue'
import MorePage from './pages/personal/MorePage.vue'
import InsurancePage from './pages/personal/InsurancePage.vue'
import BuynowPaylater from './pages/personal/BuynowPaylater.vue'
import SavingsPage from './pages/personal/SavingsPage.vue';
import PersonalSaving from './pages/personal/PersonalSaving.vue';
import UserProfile from './pages/personal/UserProfile.vue';
import BusinessPage from './pages/business/BizPage.vue'
import RevenuePage from './pages/business/RevenuePage.vue'
import ExpensePage from './pages/business/ExpensePage.vue'
import BlogPage from './pages/business/BlogPage.vue'
import RunwayPage from './pages/business/RunwayPage.vue'
import GetFinanced from './pages/business/FinancedPage.vue'
import BizLogin from './pages/business/BizLogin.vue'
import MultiStep from './pages/business/MultiStep.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/personal' },
        { path: '/personal', component: HomePage },

        { path: '/business', component: BizPage },
        { path: '/:notFound(.*)', component: NotFound },
        { path: '/login', component: LoGin },
        { path: '/forgotpassword', component: ForgotPassword },
        { path: '/signup', component: SignUp },
        { path: '/invest', component: InvestPage },
        { path: '/stock', component: StockInvest },
        { path: '/crypto', component: CryptoInvest },
        { path: '/property', component: PropertyInvest },
        { path: '/equity', component: EquityInvest },
        { path: '/more', component: MorePage },
        { path: '/insurance', component: InsurancePage },
        { path: '/bnpl', component: BuynowPaylater },
        { path: '/savings', component: SavingsPage },
        { path: '/personalsaving', component: PersonalSaving },
        { path: '/profile', component: UserProfile },
        { path: '/bizna', component: BusinessPage },
        { path: '/revenue', component: RevenuePage },
        { path: '/expense', component: ExpensePage },
        { path: '/runway', component: RunwayPage },
        { path: '/blog', component: BlogPage },
        { path: '/financed', component: GetFinanced },
        { path: '/bizlogin', component: BizLogin },
        { path: '/multistep', component: MultiStep },
    ]
}

)

export default router;