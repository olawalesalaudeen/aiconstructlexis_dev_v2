# Social bias
**Type:** Construct  
**Referenced in:** 93 papers  
**Also known as:** User name bias, Bias, Diversity bias, Omnivore bias, Demographic bias, Bias and discrimination detection, Societal bias  

## State of the Field

**Definition agreement:** Complementary. Most papers define social bias as a model-level tendency for outputs or behavior to reflect stereotypes, prejudice, favoritism, or disparate treatment across demographic or social groups. Some papers foreground different manifestations of that same phenomenon, such as sensitivity to identity cues, groupwise performance gaps, or skew from underrepresentation in training data, so the definitions can be combined rather than treated as different constructs.

**Space of definitions.** Across most papers, the prevailing usage treats social bias as a model's latent tendency or observable output pattern that reflects, amplifies, or differentially expresses societal stereotypes, prejudices, or disparate treatment across social or demographic groups. Closely related definitions describe outputs that vary with attributes such as race, gender, religion, nationality, age, or other social categories, and some state the idea more generally as attitudes, beliefs, or behaviors that favor or disfavor groups by category membership. A smaller line of work defines it through other reference standards, including preference for stereotypical over anti-stereotypical sentences, disparate subgroup performance, deviation from a desired distribution, or narrower variants such as user name bias, judge-specific diversity bias, omnivore bias, and bias and discrimination in judicial decision-making.

**Space of facets.** Papers often use the labels social bias, societal bias, demographic bias, and bias for overlapping group-based phenomena, while narrower names such as user name bias, diversity bias, and omnivore bias mark specific settings. One paper organizes social bias around two harms, stereotyping and toxicity, and some papers enumerate dimensions such as race, age, socioeconomic status, disability, religion, physical appearance, gender, sexual orientation, and nationality. Other papers place it alongside ethics and toxicity as one value issue, or use the generic label bias for disparate performance across demographic subsets and for performance variations tied to non-semantic features such as map region or style.

**Space of measurement.** Operationalization is dominated by benchmark-style datasets: papers link social bias to 12 instruments and 6 behavioral indicators, most often CrowS-Pairs, BBQ, BOLD, WinoBias, and StereoSet, plus 7 other linked instruments. In direct evaluations, these make the construct concrete as higher probabilities for stereotypical than anti-stereotypical sentence pairs, biased answers about protected groups in ambiguous or disambiguated question-answering contexts, open-ended generations from bias prompts, and stereotypical gender pronoun assignments in coreference, while other benchmark links bring in multimodal, cultural, opinion, conversational, and intersectional settings. This mostly matches definitions centered on stereotypes and group-differentiated outputs, though some papers operationalize bias through prediction quality, subgroup performance differences, or deviation from a desired distribution.

**Links.** Several papers state that fairness is related to social bias. A smaller group of papers states that social bias is related to toxicity and stereotyping, and one paper states that factual grounding is related to social bias. Single papers claim causal relationships from The Pile to social bias, from cultural understanding to social bias, and from social bias to harmful content generation; single papers also report that emotion understanding correlates with social bias and that preference prediction correlates with social bias, while hallucination, recommendation, opinion summarization, and cultural text adaptation are each related to social bias.

## Sources

**[First-Person Fairness in Chatbots](https://proceedings.iclr.cc/paper_files/paper/2025/file/92af0c8c2664429de2bb44c2692d84ae-Paper-Conference.pdf) (as "User name bias")**
> Differences in chatbot responses that arise from the stored user's name and the demographic information associated with that name.

**[CEB: Compositional Evaluation Benchmark for Fairness in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/38e491559eb9e4cf31b8cd3a4e222436-Paper-Conference.pdf)**
> Disparate treatments between social groups exhibited by model outputs, often stemming from stereotypes encoded in training data.

**[Large Language Models can Become Strong Self-Detoxifiers](https://proceedings.iclr.cc/paper_files/paper/2025/file/10df3b90b7caf44bf96b5a542a6935fe-Paper-Conference.pdf) (as "Bias")**
> The tendency of a model to produce outputs that reflect or amplify problematic societal prejudices.

**[Justice or Prejudice? Quantifying Biases in LLM-as-a-Judge](https://proceedings.iclr.cc/paper_files/paper/2025/file/fdca08d371e4b6c031397909e20043bd-Paper-Conference.pdf) (as "Diversity bias")**
> A tendency for an LLM judge to respond differently when demographic identity information is introduced into the content.

**[What can large language models do for sustainable food?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/thomas25a/thomas25a.pdf) (as "Omnivore bias")**
> A systematic tendency for the model to favor non-vegetarian options or model preferences for them more accurately than for vegetarian options.

**[CoBia: Constructed Conversations Can Trigger Otherwise Concealed Societal Biases in LLMs](https://aclanthology.org/2025.emnlp-main.84.pdf) (as "Societal bias")**
> The latent tendency of an LLM to express or amplify stereotypical, demeaning, or dehumanizing associations about social groups based on attributes such as race, gender, religion, or nationality, even when safety mechanisms are in place.

**[Cross-Care: Assessing the Healthcare Implications of Pre-training Data on Language Model Bias](https://proceedings.neurips.cc/paper_files/paper/2024/file/2a617efee5815f12b405d40569dea0a5-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Demographic bias")**
> The latent tendency of a model to reflect societal or data-driven prejudices regarding demographic groups in its outputs.

**[LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cb40fc022ca7bdc1a9a78b793661284-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Bias and discrimination detection")**
> Assessing a model's potential for unfair treatment related to subjective preferences, social stereotypes, race, gender, or religion in judicial decision-making.

## Relationships

### Social bias →
- **CrowS-Pairs** (measurements) — *measured_by*
  > Probability-based bias evaluations such as CrowS-Pairs [22] and tasks in the BIG-bench benchmarking suite [48] compare the probabilities of stereotype-related tokens conditional on the presence of identity-related tokens. (Section 2.2)
  - [Cross-Care: Assessing the Healthcare Implications of Pre-training Data on Language Model Bias](https://proceedings.neurips.cc/paper_files/paper/2024/file/2a617efee5815f12b405d40569dea0a5-Paper-Datasets_and_Benchmarks_Track.pdf)
- **BBQ** (measurements) — *measured_by*
  > we study the use of self-correction to alleviate societal biases in LLMs on the BBQ (Bias Benchmark for QA) benchmark [55], which evaluates societal biases against individuals belonging to protected classes across nine social dimensions.
  - [A Theoretical Understanding of Self-Correction through In-context Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/a399456a191ca36c7c78dff367887f0a-Paper-Conference.pdf)
- **BOLD** (measurements) — *measured_by*
  > BOLD is an open-ended language generation dataset that provides English text generation prompts for bias benchmarking across five domains. (Section 3.2)
  - [Exploring the Impact of Personality Traits on LLM Bias and Toxicity](https://aclanthology.org/2025.emnlp-main.206.pdf)
- **StereoSet** (measurements) — *measured_by*
  > We evaluate the efficacy of our debiasing method on the social bias benchmark StereoSet (Nadeem et al., 2021).
  - [The Devil is in the Neurons: Interpreting and Mitigating Social Biases in Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a1ca821d0b4807f8217da7da1747c65-Paper-Conference.pdf)
- **WinoBias** (measurements) — *measured_by*
  > ...and evaluated on out-of-distribution bias benchmarks such as WinoBias (Zhao et al., 2018) and Winogender (Rudinger et al., 2018) to test generalization (Section 1).
  - [LLM Bias Detection and Mitigation through the Lens of Desired Distributions](https://aclanthology.org/2025.emnlp-main.76.pdf)
- **BIG-bench** (measurements) — *measured_by*
  > Probability-based bias evaluations such as CrowS-Pairs [22] and tasks in the BIG-bench benchmarking suite [48] compare the probabilities of stereotype-related tokens conditional on the presence of identity-related tokens. (Section 2.2)
  - [Cross-Care: Assessing the Healthcare Implications of Pre-training Data on Language Model Bias](https://proceedings.neurips.cc/paper_files/paper/2024/file/2a617efee5815f12b405d40569dea0a5-Paper-Datasets_and_Benchmarks_Track.pdf)
- **GlobalOpinionQA** (measurements) — *measured_by*
  > GlobalOpinionQA (Durmus et al., 2024) uses multiple-choice questions to assess the opinions stated by a model relative to aggregated population opinions from different countries. The goal is to identify model bias in representing diverse viewpoints. (Section 3)
  - [The Impact of Inference Acceleration on Bias of LLMs](https://aclanthology.org/2025.naacl-long.91.pdf)
- **SBERT** (measurements) — *measured_by*
  > We use the bias score from (Dolci et al., 2023) to estimate gender bias in sentence embeddings.
  - [How Can We Diagnose and Treat Bias in Large Language Models for Clinical Decision-Making?](https://aclanthology.org/2025.naacl-long.114.pdf)
- **Winogender** (measurements) — *measured_by*
  > ...and evaluated on out-of-distribution bias benchmarks such as WinoBias (Zhao et al., 2018) and Winogender (Rudinger et al., 2018) to test generalization (Section 1).
  - [LLM Bias Detection and Mitigation through the Lens of Desired Distributions](https://aclanthology.org/2025.emnlp-main.76.pdf)
- **CoBia** (measurements) — *measured_by*
  > This lightweight adversarial attack, which we call Co-Bia (Constructed Bias), uses only a single query to expose hidden societal biases in LLMs that could emerge during a conversation. (Section 1)
  - [CoBia: Constructed Conversations Can Trigger Otherwise Concealed Societal Biases in LLMs](https://aclanthology.org/2025.emnlp-main.84.pdf)
- **HESEIA** (measurements) — *measured_by*
  > We introduce HESEIA, the first dataset for evaluating biases in LLMs organized per school area, including intersectional demographics.
  - [HESEIA: A community-based dataset for evaluating social biases in large language models, co-designed in real school settings in Latin America](https://aclanthology.org/2025.emnlp-main.1275.pdf)

### → Social bias
- **Preference prediction** (behaviors tasks) — *correlates*
  > Within the vegetarian vs. non-vegetarian meal comparisons, accuracy is lower when vegetarian options are rated higher, reflecting LLMs’ omnivore bias, as LLMs more frequently prefer non-vegetarian options compared to ground truth human preferences.
  - [What can large language models do for sustainable food?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/thomas25a/thomas25a.pdf)

### Associated with
- **Fairness** (constructs)
  > To mitigate societal biases implicitly encoded in recent successful pretrained language models, a diverse array of approaches have been proposed to encourage model fairness... (Abstract)
  - [Collapsed Language Models Promote Fairness](https://proceedings.iclr.cc/paper_files/paper/2025/file/96db0c53484428513ebc537fe48ddb7a-Paper-Conference.pdf)
- **Toxicity** (constructs)
  > Our categorization of social bias types in LLMs is structured around two distinct types of harms: Stereotyping and Toxicity.
  - [CEB: Compositional Evaluation Benchmark for Fairness in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/38e491559eb9e4cf31b8cd3a4e222436-Paper-Conference.pdf)
- **Recommendation** (behaviors tasks)
  > Clearly, this has important implications for fairness, bias, and whether recommender systems work for everyone. (Section 4).
  - [No Free Delivery Service: Epistemic limits of passive data collection in complex social systems](https://proceedings.neurips.cc/paper_files/paper/2024/file/b97fc02c9e536d68300d82be05c23aa2-Paper-Conference.pdf)
- **Stereotyping** (constructs)
  > Our categorization of social bias types in LLMs is structured around two distinct types of harms: Stereotyping and Toxicity.
  - [CEB: Compositional Evaluation Benchmark for Fairness in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/38e491559eb9e4cf31b8cd3a4e222436-Paper-Conference.pdf)
- **Opinion summarization** (behaviors tasks)
  > The use of AI language systems with inherent biases could shape the way audiences interpret and process information, especially in tasks such as opinion summarisation where biased outputs could significantly influence public opinion. (Section 1)
  - [Less Is More? Examining Fairness in Pruned Large Language Models for Summarising Opinions](https://aclanthology.org/2025.emnlp-main.909.pdf)
- **Factual grounding** (constructs)
  > Depending on application, we frame bias relative to a desired distribution—equal (for social equity) or real-world (for factual grounding) (Section 6).
  - [LLM Bias Detection and Mitigation through the Lens of Desired Distributions](https://aclanthology.org/2025.emnlp-main.76.pdf)
- **Harmful content generation** (behaviors tasks)
  > social attributes such as perceived race, gender, and physical characteristics depicted in images can significantly influence the generation of toxic content (Abstract).
  - [Uncovering Bias in Large Vision-Language Models at Scale with Counterfactuals](https://aclanthology.org/2025.naacl-long.305.pdf)
- **Emotion understanding** (constructs)
  > an analysis of the models’ emotional understanding ability, using EQ-Bench-based metrics, revealed that... (2) performance disparities were confirmed across race, gender, and age group. (Abstract)
  - [Does the Emotional Understanding of LVLMs Vary Under High-Stress Environments and Across Different Demographic Attributes?](https://aclanthology.org/2025.acl-long.1130.pdf)
- **Cultural alignment** (constructs)
  > AlKhamissi et al. (2024) demonstrate how cultural misalignment can increase bias. (Section 4.2)
  - [Position: LLMs Can be Good Tutors in English Education](https://aclanthology.org/2025.emnlp-main.885.pdf)
