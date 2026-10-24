# Personalization
**Type:** Construct  
**Referenced in:** 50 papers  
**Also known as:** Personalization capability, Preference following, Preference inference, Adaptive interaction  

## State of the Field

**Definition agreement:** Complementary. Most papers define personalization as a model adapting its outputs or responses to a particular user's needs, preferences, traits, or interaction history. A few papers broaden this to adaptation to social attributes, specific clients or communities, or to correctly referencing specific individuals in context, so they point to the same general phenomenon of user-targeted adaptation but emphasize different scopes and facets rather than an identical definition.

**Space of definitions.** Across the surveyed work, personalization is most commonly framed as adapting model outputs, responses, or content to user-specific needs, preferences, traits, or history. Many definitions make the user-specific signal explicit through historical interactions, limited user profiles or opinions, inferred user and agent characteristics, client data, or community preferences. A smaller line of work narrows the construct to adapting predictions to demographic attributes of the author, addressee, or reader, or to personalized multimodal conversation that correctly identifies specific individuals or talks about user-specific subjects. Another minority usage separates preference inference and preference following as distinct latent abilities, so the main disagreement is between a broad umbrella ability and narrower task-specific subabilities, and on whether the target of adaptation is an individual user, a client, or a community.

**Space of facets.** Papers systematize personalization mainly through task-specific facets rather than a single shared taxonomy. The clearest decomposition distinguishes preference inference from preference following, with preference following defined to include memorizing and generating responses aligned with preferences over long-context conversation. Elsewhere the same umbrella term covers style personalization from visual or contextual cues such as age, emotion, and formality, client-level adaptation in federated settings, community-level alignment to norms and values, and a personalization capability for multimodal conversations that identify and reference specific individuals. A related label, adaptive interaction, is used for modifying responses based on context or user history, including personalized results or adjusted conversational tone.

**Space of measurement.** Operationalization spans 5 measurement instruments, LLM-as-a-judge, human evaluation, Caltech101, GlobalOpinionQA, and OpinionQA, plus 3 linked behavioral indicators. The most common instrument is LLM-as-a-judge, followed by human evaluation; papers use LLM judges to rate helpfulness, relevance to user preferences, travel-plan preference alignment, or the similarity between inferred and true preference descriptions, and use human studies to check alignment with end-users or personal conventions. The benchmark-style instruments are used to study steerability for specific users or social groups, or to investigate personalization together with generalization and privacy. These operationalizations mostly instantiate personalization as alignment to user preferences or user-specific context, though some narrow it to classification or benchmark performance.

**Links.** Several papers claim causal relationships from multimodal understanding, privacy preservation, expressive power, and in-context learning to personalization; one paper also claims a causal relationship in the opposite direction between personalization and multimodal understanding. Other papers claim a causal relationship from personalization to generalization, and two further causal claims involve behavioral indicators, one directed to personalization and one directed from it. Personalization is also reported as related to privacy preservation and generalization, plus 3 other constructs and 1 behavioral indicator, and no correlational claims are reported.

## Sources

**[Gen-Z: Generative Zero-Shot Text Classification with Contextualized Label Descriptions](https://proceedings.iclr.cc/paper_files/paper/2024/file/af7cc9e2366b8f8837a6ef339810277a-Paper-Conference.pdf)**
> The ability to tailor responses and content to a user's unique needs and preferences by understanding their historical interactions.

**[Personalized Visual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/6b69dcf999ee89f48d08c6c9881a4c0d-Paper-Conference.pdf) (as "Personalization capability")**
> The latent ability of a multimodal model to conduct personalized conversations that correctly identify and reference specific individuals presented in context.

**[Do LLMs Recognize Your Preferences? Evaluating Personalized Preference Following in LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/28a46044775d97a4efcbcf14e7f13209-Paper-Conference.pdf) (as "Preference following")**
> The latent ability of a model to infer, memorize, and generate responses that adhere to user preferences expressed over a long-context conversation.

**[Do LLMs Recognize Your Preferences? Evaluating Personalized Preference Following in LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/28a46044775d97a4efcbcf14e7f13209-Paper-Conference.pdf) (as "Preference inference")**
> The latent ability to infer a user's preferences from explicit statements or indirect conversational evidence.

**[Humanizing Machines: Rethinking LLM Anthropomorphism Through a Multi-Level Framework of Design](https://aclanthology.org/2025.emnlp-main.164.pdf) (as "Adaptive interaction")**
> The model's ability to modify its responses based on context or user history, such as personalizing results or adjusting conversational tone.

## Relationships

### Personalization →
- **LLM-as-a-judge** (measurements) — *measured_by*
  > “We further explore whether we can employ language models to automate the evaluation... we ask GPT-4 to rate the responses based on their helpfulness and relevance to users’ preferences.”
  - [Context Steering: Controllable Personalization at Inference Time](https://proceedings.iclr.cc/paper_files/paper/2025/file/db178cd03313e23cffb8937e93f0d464-Paper-Conference.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > To show that CoS’s personalization aligns with end-users, we conduct a user study with 15 participants. (Sec 3.1)
  - [Context Steering: Controllable Personalization at Inference Time](https://proceedings.iclr.cc/paper_files/paper/2025/file/db178cd03313e23cffb8937e93f0d464-Paper-Conference.pdf)
- **Visual question answering** (behaviors tasks) — *causes*
  > After being personalized, our method (Yo’LLaVA) can: ... (2) support visual question answering about the subject (e.g., given a new photo, one can ask about <sks>’s location); (Section 3)
  - [Yo'LLaVA: Your Personalized Language and Vision Assistant](https://proceedings.neurips.cc/paper_files/paper/2024/file/48088756ec0ce6ba362bddc7ebeb3915-Paper-Conference.pdf)
- **Caltech101** (measurements) — *measured_by*
  > We select four visual classification datasets to investigate the task of balancing personalization, generalization and privacy: Caltech101 (Fei-Fei et al., 2004) (Section 4.1).
  - [Privacy-Preserving Personalized Federated Prompt Learning for Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4431224d3762aa655f0aee4eaf04ff16-Paper-Conference.pdf)
- **OpinionQA** (measurements) — *measured_by*
  > For the experiments, we first use two multiple-choice QA datasets proposed to measure the steerability of LLMs for specific users (or social groups): OpinionQA (Santurkar et al., 2023) and GlobalOpinionQA (Durmus et al., 2023). (Section 4.1)
  - [Few-shot Personalization of LLMs with Mis-aligned Responses](https://aclanthology.org/2025.naacl-long.598.pdf)
- **GlobalOpinionQA** (measurements) — *measured_by*
  > For the experiments, we first use two multiple-choice QA datasets proposed to measure the steerability of LLMs for specific users (or social groups): OpinionQA (Santurkar et al., 2023) and GlobalOpinionQA (Durmus et al., 2023). (Section 4.1)
  - [Few-shot Personalization of LLMs with Mis-aligned Responses](https://aclanthology.org/2025.naacl-long.598.pdf)

### → Personalization
- **Privacy preservation** (constructs) — *causes*
  > stringent privacy measures, such as differential privacy, can hinder both personalization and generalization (Abstract).
  - [Privacy-Preserving Personalized Federated Prompt Learning for Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4431224d3762aa655f0aee4eaf04ff16-Paper-Conference.pdf)
- **Synthetic recall** (behaviors tasks) — *causes*
  > RAG consistently performed the best across most models, indicating that adherence to user preferences may hinge on retrieval capabilities.
  - [Do LLMs Recognize Your Preferences? Evaluating Personalized Preference Following in LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/28a46044775d97a4efcbcf14e7f13209-Paper-Conference.pdf)
- **Expressive power** (constructs) — *causes*
  > The residual term is crucial for retaining the expressiveness lost during the factorization process, thereby preserving the client-specific learning and improving personalization (Section 1).
  - [Privacy-Preserving Personalized Federated Prompt Learning for Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4431224d3762aa655f0aee4eaf04ff16-Paper-Conference.pdf)
- **In-context learning** (constructs) — *causes*
  > This approach fully harnesses the in-context learning capabilities of MLLMs, allowing them to adapt to new individuals without additional training. (Section 3)
  - [Personalized Visual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/6b69dcf999ee89f48d08c6c9881a4c0d-Paper-Conference.pdf)

### Associated with
- **Generalization** (constructs)
  > FedPGP (Cui et al., 2024): Incorporate a low-rank adaptation term with an additional contrastive loss to balance generalization and personalization.
  - [Federated Disentangled Tuning with Textual Prior Decoupling and Visual Dynamic Adaptation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25k/yang25k.pdf)
- **Catastrophic forgetting** (behaviors tasks)
  > First, when personalizing an LMM, we want to ensure that its broad pre-trained knowledge is unaffected (i.e., there is no catastrophic forgetting [15, 16]). (Section 1)
  - [Yo'LLaVA: Your Personalized Language and Vision Assistant](https://proceedings.neurips.cc/paper_files/paper/2024/file/48088756ec0ce6ba362bddc7ebeb3915-Paper-Conference.pdf)
- **Robustness** (constructs)
  > the diversity of names used during training makes the personalization capability more robust and generalizable to new individuals. (Section 6.2.3 IMPACT OF DATA SCALE AND NAME REPETITION)
  - [Personalized Visual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/6b69dcf999ee89f48d08c6c9881a4c0d-Paper-Conference.pdf)
- **Long-context understanding** (constructs)
  > (d) Long-context Modeling Capacity (LC): As more exchanges between the user and the LLM occur, more personal information is gradually revealed, while the limited context length of LLMs makes it increasingly challenging for the LLM to integrate information from past interactions. (Section 3)
  - [Exploring the Potential of LLMs as Personalized Assistants: Dataset, Evaluation, and Analysis](https://aclanthology.org/2025.acl-long.504.pdf)
