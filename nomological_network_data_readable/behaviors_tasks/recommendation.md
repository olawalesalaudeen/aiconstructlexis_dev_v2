# Recommendation
**Type:** Behavior  
**Referenced in:** 9 papers  
**Also known as:** User intention capture, Collaborative filtering, Top-K item generation, Recommendation generation, Item recommendation, Top-k recommendation  

## State of the Field

**Space of definitions.** Across definitions, the prevailing usage treats recommendation as predicting or generating items for a user from prior interactions or preferences. Most descriptions focus on producing a list, often a ranked or top-k list, of items or item IDs the user is likely to prefer, while one common setting frames it as selecting the item that best matches a user's preferences from binary interaction behaviors. A smaller line of work makes the output criterion very explicit as "generating top-K items (i.e., K distinct token sequences) as a recommendation list by beam search."

**Variants.** Papers use several names for related variants, including collaborative filtering, recommendation generation, item recommendation, top-k recommendation, top-K item generation, and user intention capture. These variants differ mainly in the information they use: some rely on a user-item interaction matrix or interaction history, some target the next relevant item ID a user will like, and some estimate preferences from historical interactions together with item features such as descriptions and images. One variant further refines recommendations by combining historical interests with language-based user intention queries.

**Space of elicitation and scores.** No measurement instrument is linked to recommendation. The papers instead describe the behavior directly through task formulations such as top-k list generation, relevant item ID prediction, and beam-search generation of K distinct token sequences.

**What it is taken as evidence of.** Papers link recommendation to 2 constructs, Fairness and Social bias, and both links are described only as related. In the quoted language, recommender systems have "implications for fairness, bias, and whether recommender systems work for everyone," so the concept is connected to these constructs without a stronger directional claim.

## Sources

**[Language Representations Can be What Recommenders Need: Findings and Potentials](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4bab1843c8d5a69f5abfd0824593493-Paper-Conference.pdf) (as "Collaborative filtering")**
> The task of predicting a user's interest in an item based on the collective preferences and behaviors of many users, typically represented in a user-item interaction matrix.

**[Language Representations Can be What Recommenders Need: Findings and Potentials](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4bab1843c8d5a69f5abfd0824593493-Paper-Conference.pdf) (as "User intention capture")**
> Refining recommendations by combining user historical interests with language-based intention queries.

**[Efficient Inference for Large Language Model-based Generative Recommendation](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4bf5c3245fd92a4554a16af9803b757-Paper-Conference.pdf) (as "Top-K item generation")**
> The observable behavior of producing K distinct token sequences, representing a list of recommended items, typically via beam search.

**[Logit Space Constrained Fine-Tuning for Mitigating Hallucinations in LLM-Based Recommender Systems](https://aclanthology.org/2025.emnlp-main.1491.pdf) (as "Recommendation generation")**
> The observable task of producing a list of recommended items for a user based on their profile and historical interactions.

**[Towards Unified Multi-Modal Personalization: Large Vision-Language Models for Generative Recommendation and Beyond](https://proceedings.iclr.cc/paper_files/paper/2024/file/297a7a54da76d95f02b04d957a53c7ba-Paper-Conference.pdf) (as "Item recommendation")**
> The observable task of predicting and generating a list of relevant item IDs that a user is likely to be interested in based on their interaction history.

**[A Multi-modal Large Language Model with Graph-of-Thought for Effective Recommendation](https://aclanthology.org/2025.naacl-long.76.pdf) (as "Top-k recommendation")**
> Generating a ranked list of k items most likely to be preferred by a user based on historical interactions and item features.

## Relationships

### → Recommendation
- **Memorization** (constructs) — *causes*
  > The experiments show that META ID improves memorization and diversity score, which leads to improvements in various recommendation tasks. (Section 1)
  - [Improving LLMs for Recommendation with Out-Of-Vocabulary Tokens](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25ar/huang25ar.pdf)

### Associated with
- **Fairness** (constructs)
  > Clearly, this has important implications for fairness, bias, and whether recommender systems work for everyone. (Section 4).
  - [No Free Delivery Service: Epistemic limits of passive data collection in complex social systems](https://proceedings.neurips.cc/paper_files/paper/2024/file/b97fc02c9e536d68300d82be05c23aa2-Paper-Conference.pdf)
- **Social bias** (constructs)
  > Clearly, this has important implications for fairness, bias, and whether recommender systems work for everyone. (Section 4).
  - [No Free Delivery Service: Epistemic limits of passive data collection in complex social systems](https://proceedings.neurips.cc/paper_files/paper/2024/file/b97fc02c9e536d68300d82be05c23aa2-Paper-Conference.pdf)
