// let profileObj = {};
// let reposArray = [];

// 깃허브 클래스
class GitHub {
  constructor() {
    this.start_url = "https://api.github.com/users/";
  }

  async userInfo(name) {
    try {
      const getProfile = await fetch(`${this.start_url}${name}`);
      if (!getProfile.ok) throw new Error("프로필 없음");
      const profile = await getProfile.json();

      const getRepos = await fetch(`${this.start_url}${name}/repos`);
      if (!getRepos.ok) throw new Error("리포지토리 없음");
      const repos = await getRepos.json();

      return { profile, repos };
    } catch (error) {
      console.error("Error fetching userdata: ", error.message);
      return { profile: null, repos: [] };
    }
  }
}
async function getUserData(name) {
  const userData = await github.userInfo(name);

  if (!userData.profile) {
    console.log("No profile data found or network error occurred.");
    return;
  }

  console.log(userData.profile);
  console.log(userData.repos);

  const profileObj = userData.profile;
  const reposArray = userData.repos.sort(
    (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
  ); // updated_at 최신순 정렬

  return { profileObj, reposArray };
}

// html 업데이트
function updateProfile(avatarUrl, htmlUrl) {
  const profileImage = document.querySelector(".picture-profile img");
  const viewProfile = document.querySelector(".view-profile");
  profileImage.src = avatarUrl;
  viewProfile.href = htmlUrl;
}
function updateInfoRepo(publicRepos, publicGists, followers, following) {
  const reposNum = document.querySelector("#repos_num");
  const gistsNum = document.querySelector("#gists_num");
  const followersNum = document.querySelector("#followers_num");
  const followingNum = document.querySelector("#following_num");
  reposNum.textContent = publicRepos;
  gistsNum.textContent = publicGists;
  followersNum.textContent = followers;
  followingNum.textContent = following;
}
function updateInfoWeb(company, blog, location, createdAt) {
  const companyName = document.querySelector("#company_name");
  const webName = document.querySelector("#web_name");
  const locationName = document.querySelector("#location_name");
  const memberSince = document.querySelector("#member_since");
  companyName.textContent = company;
  webName.textContent = blog;
  locationName.textContent = location;
  memberSince.textContent = createdAt;
}
function updateAndMakeRepos(
  name,
  svn_url,
  stargazers_count,
  watchers_count,
  forks_count
) {
  const repoLink = document.querySelector("#repo_link");
  const repoStars = document.querySelector("#repo_stars");
  const repoWatchers = document.querySelector("#repo_watchers");
  const repoForks = document.querySelector("#repo_forks");
  repoLink.textContent = name;
  repoLink.href = svn_url;
  repoStars.textContent = stargazers_count;
  repoWatchers.textContent = watchers_count;
  repoForks.textContent = forks_count;
}

const github = new GitHub();

// 1. profileObj - view-profile: input 읽어서 name 검색, 엔터로 인풋 넘김
// getUserData("simonsmith");
document.querySelector(".write-username").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const username = e.target.value; // 입력한 텍스트 수집
    if (username) {
      const user = getUserData(username);
      user.then((userData) => {
        // picture-profile: avatar_url, html_url
        updateProfile(
          userData.profileObj.avatar_url,
          userData.profileObj.html_url
        );
        // info-repo: public_repos, public_gists, followers, following
        updateInfoRepo(
          userData.profileObj.public_repos,
          userData.profileObj.public_gists,
          userData.profileObj.followers,
          userData.profileObj.following
        );
        // info-web: company, blog, location, created_at
        updateInfoWeb(
          userData.profileObj.company,
          userData.profileObj.blog,
          userData.profileObj.location,
          userData.profileObj.created_at
        );
        // 2. reposArray - repo: updated_at 최신 탑5, name(svn_url), stargazers_count, watchers_count, forks_count
        updateAndMakeRepos(
          userData.reposArray.name,
          userData.reposArray.svn_url,
          userData.reposArray.stargazers_count,
          userData.reposArray.watchers_count,
          userData.reposArray.forks_count
        );
      });
    } else {
      console.log("Please enter a valid username.");
    }
  }
});
