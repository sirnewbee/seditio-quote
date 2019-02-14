import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DigitalMktgService {
  public dm_desc = {
    online_ad_desc: "Online advertising, also called online marketing or Internet advertising or web advertising, is a form of marketing and advertising which uses the Internet to deliver promotional marketing messages to consumers.",
    conversion_optimization_desc: "In internet marketing, conversion optimization, or conversion rate optimization is a system for increasing the percentage of visitors to a website that convert into customers, or more generally, take any desired action on a webpage. It is commonly referred to as CRO."
  }
  public online_ads = [
    {'name': "Google AdWords Search Campaign", 'price': 350, 'pages': 0, 'total': 0 , 'description': "An AdWords campaign is an ad campaign within an AdWords account. An AdWords campaign is usually composed of several ad groups. Each ad group serves different ad texts based on the type of keyword a user may type into Google's search engine."},
    {'name': "Google AdWords Display Campaign", 'price': 500, 'pages': 0, 'total': 0 , 'description': "Google AdWords is split into two networks, the Search Network and the Display Network. When advertising on the Search Network, businesses place text ads in the search engine results. On the Display Network, businesses instead place display ads on a huge network of sites across the internet."},
    {'name': "Monthly Management and Reporting", 'price': 350, 'pages': 0, 'total': 0 , 'description': "The Monthly Management Report (MMR) is a snapshot of the performance data present in the Management Information System on the last day of each month and is posted 20 days after the end of the reporting period."},
    {'name': "Facebook Campaign Creation", 'price': 450, 'pages': 0, 'total': 0 , 'description': "Your Facebook campaign structure needs 3 parts to run: Campaign: A campaign contains one or more ad sets and ads. You'll choose one advertising objective for each of your campaigns. ... You'll define your targeting, budget, schedule, bidding and placement at the ad set level. Ad: The creative you use makes up an ad."},
    {'name': "LinkedIn Campaign Creation", 'price': 350    , 'pages': 0, 'total': 0 , 'description': "Campaign Manager is the advertising platform on LinkedIn. ... An objective is the action you want your audience to take upon seeing your ad. Selecting your objective helps show ad formats, features and bid-types that support your objective during campaign creation."},
    {'name': "YouTube Search Campaign Creation", 'price': 350, 'pages': 0, 'total': 0 , 'description': "Video ads are an exciting way to reach and engage your audience on YouTube and across the web. You can create and manage your campaigns in Google Ads, using the “Video” campaign type."},
    {'name': "YouTube Video Campaign Creation", 'price': 850, 'pages': 0, 'total': 0 , 'description': "Video ads are an exciting way to reach and engage your audience on YouTube and across the web. You can create and manage your campaigns in Google Ads, using the “Video” campaign type."}
  ];

  public conversion_optimizations = [
    {'name': "Full Conversion Audit", 'price': 3500, 'pages': 0, 'total': 0 , 'description': "A conversion rate audit is the first step of a successful conversion rate optimization process. Through a conversion rate audit, we can learn about visitor behavior, find the holes in our conversion funnels, and use our knowledge of visitor behavior to fix those holes, boosting our conversion rates."},
    {'name': "Digital Marketing Strategy", 'price': 1500, 'pages': 0, 'total': 0 , 'description': " Your digital marketing strategy is the series of actions that help you achieve your company goals through carefully selected online marketing channels. These channels include paid, earned, and owned media, and can all support a common campaign around a particular line of business."},
    {'name': "AdWords Account Audit", 'price': 2250, 'pages': 0, 'total': 0 , 'description': "An AdWords account audit is the process of evaluating the effectiveness of your AdWords accounts. An audit can reveal painful hidden issues that need to be addressed. Once you've identified these issues, you can get to work improving the overall health and performance of your account."},
    {'name': "SEO / Google Search Audit", 'price': 1500, 'pages': 0, 'total': 0 , 'description': "An SEO Audit is the analysis of your website based on factors that are important to the search engines in terms of organic search results. It dives into the technical infrastructure, on-page and off-page elements to in order to determine issues, opportunities, and recommended fixes."}
  ];

  public choices = {
    online_ad: false,
    conversion_optimization: false
  };
  
  constructor() { }
}
