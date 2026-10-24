# Harmful content generation
**Type:** Behavior  
**Referenced in:** 230 papers  
**Also known as:** Toxic content generation, Unsafe text generation, Gaslighting response generation, Harmful knowledge generation, Harmful language generation, Harmful response generation, Jailbreak response generation, Unsafe response generation, Harmful-yet-helpful response generation, Unsafe generation, Toxic language generation, Toxic text generation, Malicious review generation, Unsafe output generation, Unsafe behavior, Harmful text generation, Malicious response generation, Phishing email generation, Toxic response generation, Compliance with malicious requests, Offensive language generation, Inappropriate content incorporation, Harmful instruction following, Following malicious instructions, Unsafe instruction fulfillment, Harmful question answering, Adversarial query answering, Dangerous question answering, Unsafe content generation, Compliance with harmful requests  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is an LLM producing harmful, unsafe, toxic, offensive, illegal, unethical, deceptive, or otherwise policy-violating output, usually in response to a malicious, adversarial, or sensitive prompt. Most formulations treat the behavior as compliance rather than refusal: a response counts if it attempts to answer, starts to answer, or indicates willingness to answer a harmful query, though some papers require more, such as "substantial content" or "concrete and helpful suggestions" that directly assist the unsafe intent. The covered content is broad, including hate speech, discrimination, misinformation, self-harm, sexual exploitation, hacking, bomb-making, illegal acts, fabricated content, and other restricted outputs.

**Variants.** Most papers stay broad and use neighboring names such as harmful, unsafe, or toxic content, response, text, or language generation. A smaller line of work narrows the behavior to compliance tasks, including harmful question answering, adversarial query answering, unsafe instruction fulfillment, and following malicious instructions, where the emphasis is on answering rather than refusing. Other variants specialize by setting or output type: multilingual or code-switched unsafe content, multimodal vision or audio jailbreak responses, harmful-yet-helpful outputs, harmful knowledge generation, gaslighting responses, malicious review generation, phishing email generation, and inappropriate content incorporation.

**Space of elicitation and scores.** Papers link this behavior to 20 measurement instruments. The most recurrent are AdvBench, LLM-as-a-judge, Perspective API, BeaverTails, and Llama Guard 3, followed by 15 other instruments. Across these uses, the behavior is elicited with harmful-instruction or toxic-prompt benchmarks and scored with moderation APIs, safety classifiers, LLM judges, harmfulness scores, or human annotation, with criteria ranging from whether the model attempts to answer a harmful request to binary harmful or benign decisions, toxicity scores, or graded harmfulness.

**What it is taken as evidence of.** Only one construct is explicitly measured by this behavior: Safety, with one paper defining safety as stopping models from following malicious instructions and generating toxic content. Beyond that, papers connect the behavior to 11 constructs overall, most often Safety alignment: papers claim causal relationships from Safety alignment to harmful content generation, report that it correlates with Safety alignment, and also describe the two as related. Other recorded links are mostly causal claims from Safety robustness, Controllability, Harmlessness, Intent understanding, Misalignment, Social bias, and User modeling to harmful content generation, plus one causal claim from harmful content generation to Representational harm and one related link to Toxicity, so the recorded uses extend beyond a single construct.

## Sources

**[AutoDAN: Generating Stealthy Jailbreak Prompts on Aligned Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/f83cb637e159e789f5576ff6848874de-Paper-Conference.pdf)**
> The production of toxic, offensive, or otherwise damaging content by a language model, which alignment methods aim to suppress.

**[Apathetic or Empathetic? Evaluating LLMs' Emotional Alignments with Humans](https://proceedings.neurips.cc/paper_files/paper/2024/file/b0049c3f9c53fb06f674ae66c2cf2376-Paper-Conference.pdf) (as "Toxic content generation")**
> Producing responses that are considered toxic or aggressive in demographic-description prompts.

**[Optimistic Verifiable Training by Controlling Hardware Nondeterminism](https://proceedings.neurips.cc/paper_files/paper/2024/file/ad885a9caafff30ee9cafdf0ee42fda2-Paper-Conference.pdf) (as "Unsafe text generation")**
> The observable model behavior of producing harmful, undesirable, or toxic content, often as a result of data poisoning.

**[ETA: Evaluating Then Aligning Safety of Vision Language Models at Inference Time](https://proceedings.iclr.cc/paper_files/paper/2025/file/06f9fe2915857be2b1e369419a531ad3-Paper-Conference.pdf) (as "Unsafe response generation")**
> The observable output of harmful or unsafe content by the model in response to malicious queries.

**[Can a Large Language Model be a Gaslighter?](https://proceedings.iclr.cc/paper_files/paper/2025/file/0769598fdeb4f23ee86fec1bc0777f44-Paper-Conference.pdf) (as "Gaslighting response generation")**
> Producing assistant replies that subtly manipulate a user's beliefs, self-doubt, or self-perception in a conversation.

**[Robust LLM safeguarding via refusal feature adversarial training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1022661f3f43406065641f16ce25eafa-Paper-Conference.pdf) (as "Harmful response generation")**
> Producing unsafe, harmful, sensitive, or false content in response to malicious prompts.

**[Injecting Universal Jailbreak Backdoors into LLMs in Minutes](https://proceedings.iclr.cc/paper_files/paper/2025/file/1160e7f31d0a74abbbe1bbf7924b949c-Paper-Conference.pdf) (as "Jailbreak response generation")**
> Producing instruction-following responses to harmful or restricted prompts when a backdoor trigger is activated.

**[Uncertainty-Aware Decoding with Minimum Bayes Risk](https://proceedings.iclr.cc/paper_files/paper/2025/file/1588dc2b2ef339d6e4c47d212e36f991-Paper-Conference.pdf) (as "Harmful language generation")**
> The generation of text that is toxic, biased, or otherwise harmful.

**[Unlearning or Obfuscating? Jogging the Memory of Unlearned LLMs via Benign Relearning](https://proceedings.iclr.cc/paper_files/paper/2025/file/18fd48d9cbbf9a20e434c9d3db6973c5-Paper-Conference.pdf) (as "Harmful knowledge generation")**
> The observable model behavior of producing text containing dangerous, undesirable, or hazardous information, such as biosecurity threats.

**[Backtracking Improves Generation Safety](https://proceedings.iclr.cc/paper_files/paper/2025/file/65beb73449888fabcf601b3a3ef4b3a7-Paper-Conference.pdf) (as "Unsafe generation")**
> The observable production of harmful, malicious, or policy-violating text in response to a prompt.

**[Failures to Find Transferable Image Jailbreaks Between Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/6e3daaeca6be8579573f69082b2dd58b-Paper-Conference.pdf) (as "Harmful-yet-helpful response generation")**
> Producing outputs that are both harmful and instrumentally useful to a user's malicious goal.

**[Model Editing as a Robust and Denoised variant of DPO: A Case Study on Toxicity](https://proceedings.iclr.cc/paper_files/paper/2025/file/acb7ce5aab6e134300a2361dd90a501f-Paper-Conference.pdf) (as "Toxic text generation")**
> Producing continuations or outputs that contain harmful, offensive, or unsafe language when prompted.

**[Controlling Language and Diffusion Models by Transporting Activations](https://proceedings.iclr.cc/paper_files/paper/2025/file/df4f6e43446b1ee29c5a33d32c279f83-Paper-Conference.pdf) (as "Toxic language generation")**
> The observable act of a language model producing text that is considered toxic, harmful, or offensive.

**[Learning Safety Constraints for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25b/chen25b.pdf) (as "Unsafe output generation")**
> The model produces content that violates ethical or safety norms, such as generating harmful, illegal, or deceptive text in response to adversarial prompts.

**[Online Detection of LLM-Generated Texts via Sequential Hypothesis Testing by Betting](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25bn/chen25bn.pdf) (as "Malicious review generation")**
> The creation of fake or deceptive product or service reviews.

**[SafeArena: Evaluating the Safety of Autonomous Web Agents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tur25a/tur25a.pdf) (as "Compliance with malicious requests")**
> The observable tendency of an agent to follow and execute instructions that are explicitly harmful or malicious.

**[Backdoor Attacks in Token Selection of Attention Mechanism](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25c/wang25c.pdf) (as "Malicious response generation")**
> The model produces harmful, unsafe, or otherwise undesirable text as a result of an adversarial trigger.

**[LLMScan: Causal Scan for LLM Misbehavior Detection](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25al/zhang25al.pdf) (as "Toxic response generation")**
> The observable production of insulting, offensive, or aggressive language by an LLM in response to certain inputs.

**[UDora: A Unified Red Teaming Framework against LLM Agents by Dynamically Hijacking Their Own Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cl/zhang25cl.pdf) (as "Phishing email generation")**
> The production of deceptive emails designed to extract sensitive information, which the agent may be induced to write and send under adversarial prompting.

**[MM-RLHF: The Next Step Forward in Multimodal LLM Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cs/zhang25cs.pdf) (as "Unsafe behavior")**
> The model's generation of outputs that are harmful, biased, unethical, or otherwise violate safety guidelines.

**[Weak-to-Strong Jailbreaking on Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhao25aa/zhao25aa.pdf) (as "Harmful text generation")**
> The observable output of text that is unethical, biased, dangerous, or otherwise violates safety guidelines.

**[Exploring Chain-of-Thought Reasoning for Steerable Pluralistic Alignment](https://aclanthology.org/2025.emnlp-main.1301.pdf) (as "Offensive language generation")**
> The observable, unintended behavior of producing text that is flagged as offensive, such as harassment or violent content.

**[Rescorla-Wagner Steering of LLMs for Undesired Behaviors over Disproportionate Inappropriate Context](https://aclanthology.org/2025.emnlp-main.1003.pdf) (as "Inappropriate content incorporation")**
> The observable phenomenon where an LLM includes harmful or irrelevant information—such as fake news, hate speech, or privacy violations—into its generated response despite the presence of accurate context.

**[ALI-Agent: Assessing LLMs'  Alignment with Human Values via Agent-based Evaluation](https://proceedings.neurips.cc/paper_files/paper/2024/file/b35c38f70065ac6c694089ca93a015bb-Paper-Conference.pdf) (as "Harmful instruction following")**
> The observable behavior of a model complying with a harmful instruction to generate an unsafe or malicious response.

**[Uncovering Safety Risks of Large Language Models through Concept Activation Vector](https://proceedings.neurips.cc/paper_files/paper/2024/file/d3a230d716e65afab578a8eb31a8d25f-Paper-Conference.pdf) (as "Following malicious instructions")**
> The model generates a response that complies with a user's request for harmful, unethical, or dangerous content, rather than refusing.

**[SORRY-Bench: Systematically Evaluating Large Language Model Safety Refusal](https://proceedings.iclr.cc/paper_files/paper/2025/file/9622163c87b67fd5a4a0ec3247cf356e-Paper-Conference.pdf) (as "Unsafe instruction fulfillment")**
> The observable behavior where a model executes a potentially unsafe instruction by providing substantial content that directly assists with the user's unsafe intent.

**[On Evaluating the Durability of Safeguards for Open-Weight LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/9d3a4cdf6f70559e8c6fe02170fba568-Paper-Conference.pdf) (as "Harmful question answering")**
> The observable behavior of a model complying with and providing a substantive answer to a harmful or malicious question.

**[Who's asking? User personas and the mechanics of latent misalignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/e40d5118ee8f837729fa877add71c38f-Paper-Conference.pdf) (as "Adversarial query answering")**
> The act of providing a substantive, non-refusal response to a query designed to elicit harmful content.

**[Can a Large Language Model be a Gaslighter?](https://proceedings.iclr.cc/paper_files/paper/2025/file/0769598fdeb4f23ee86fec1bc0777f44-Paper-Conference.pdf) (as "Dangerous question answering")**
> Responding to harmful or unsafe user questions in a way that reveals whether the model refuses or complies.

**[Multilingual Jailbreak Challenges in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/6b396f766a50e0853a5164e68048540c-Paper-Conference.pdf) (as "Unsafe content generation")**
> The observable production of harmful or inappropriate responses by an LLM when prompted with malicious or sensitive queries, particularly in non-English languages.

**[Why Safeguarded Ships Run Aground? Aligned Large Language Models' Safety Mechanisms Tend to Be Anchored in The Template Region](https://aclanthology.org/2025.acl-long.738.pdf) (as "Compliance with harmful requests")**
> The observable behavior of a model generating a response that fulfills a harmful or unethical user instruction, thereby bypassing its safety training.

## Relationships

### Harmful content generation →
- **Perspective API** (measurements) — *measured_by*
  > To measure the toxicity of these harmful generations, we employ automatic evaluation models pre-trained on toxic datasets, including Perspective API and toxic classifiers (Hanu & Unitary team, 2020) with BERT (Kenton & Toutanova, 2019) and RoBERTa (Liu et al., 2019). (Section 4)
  - [Jailbreak in pieces: Compositional Adversarial Attacks on Multi-Modal Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/83170ccee5543b872f4de71002f21aad-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > To measure jailbreak success, we computed: (i) Cross-Entropy (Eqn. 1) and (ii) Claude 3 Opus Harmful-Yet-Helpful Score by prompting Claude 3 Opus to assess how helpful-yet-harmful sampled outputs are.
  - [Failures to Find Transferable Image Jailbreaks Between Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/6e3daaeca6be8579573f69082b2dd58b-Paper-Conference.pdf)
- **AdvBench** (measurements) — *measured_by*
  > For our prompts, we sample 100 instructions from AdvBench (Zou et al., 2023). We say that the model output reflects the ANSWER task if it attempts to answer the question... (Section 4.3)
  - [Understanding Catastrophic Forgetting in Language Models via Implicit Inference](https://proceedings.iclr.cc/paper_files/paper/2024/file/692ae28fda9bfbde7c01b13bf5a03395-Paper-Conference.pdf)
- **ToxiGen** (measurements) — *measured_by*
  > We take only the prompts designed to produce toxic language (‘hateful’ prompts) and use 500 prompts per group to reduce evaluation costs. (Appendix D).
  - [Unpacking DPO and PPO: Disentangling Best Practices for Learning from Preference Feedback](https://proceedings.neurips.cc/paper_files/paper/2024/file/404df2480b6eef0486a1679e371894b0-Paper-Conference.pdf)
- **BeaverTails** (measurements) — *measured_by*
  > To calculate the harmful score, we sample 1000 instructions from the testing set of BeaverTails (Ji et al., 2023).
  - [Booster: Tackling Harmful Fine-tuning for Large Language Models via Attenuating Harmful Perturbation](https://proceedings.iclr.cc/paper_files/paper/2025/file/a7ac8a21e5a27e7ab31a5f42a0117bdb-Paper-Conference.pdf)
- **Llama Guard 3** (measurements) — *measured_by*
  > Then evaluate the harmfulness score on its responses with the Llama-Guard-3-8B (Llama Team, 2024). We use 70% harmful prompts in the AdvBench dataset (Zou et al., 2023b) for InferAligner, Vaccine, and our SaLoRA. (Section 5.1).
  - [SaLoRA: Safety-Alignment Preserved Low-Rank Adaptation](https://proceedings.iclr.cc/paper_files/paper/2025/file/e24d9d028e3c7f6f13e6032919ee021e-Paper-Conference.pdf)
- **RealToxicityPrompts** (measurements) — *measured_by*
  > We randomly sample 1k prompts from the non-toxic prompts of the REALTOXICITYPROMPTS (Gehman et al., 2020), which was designed to elicit toxic responses. (Section 4.3)
  - [CRITIC: Large Language Models Can Self-Correct with Tool-Interactive Critiquing](https://proceedings.iclr.cc/paper_files/paper/2024/file/fef126561bbf9d4467dbb8d27334b8fe-Paper-Conference.pdf)
- **HarmBench classifier** (measurements) — *measured_by*
  > To compute attack success rate, we use three LLM-as-a-judge models that are fine-tuned to assess output safety: the official HarmBench classifier... (Section 5)
  - [Robust LLM safeguarding via refusal feature adversarial training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1022661f3f43406065641f16ce25eafa-Paper-Conference.pdf)
- **HarmBench** (measurements) — *measured_by*
  > our method not only induces the target LLM to answer and provide harmful content in more malicious requests, as measured by the Harmbench ASR
  - [AutoDAN-Turbo: A Lifelong Agent for Strategy Self-Exploration to Jailbreak LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/1bff3663270ba47f801e917f782d7935-Paper-Conference.pdf)
- **OpenAI Moderation API** (measurements) — *measured_by*
  > The success rate for each prompt was determined by whether the chatbot’s response to such a prompt was flagged by either Detoxify or OpenAI Moderation API (Section 4).
  - [WildChat: 1M ChatGPT Interaction Logs in the Wild](https://proceedings.iclr.cc/paper_files/paper/2024/file/9421261e06f1a63a352b068f1ac90609-Paper-Conference.pdf)
- **Detoxify** (measurements) — *measured_by*
  > The success rate for each prompt was determined by whether the chatbot’s response to such a prompt was flagged by either Detoxify or OpenAI Moderation API (Section 4).
  - [WildChat: 1M ChatGPT Interaction Logs in the Wild](https://proceedings.iclr.cc/paper_files/paper/2024/file/9421261e06f1a63a352b068f1ac90609-Paper-Conference.pdf)
- **Llama Guard 2** (measurements) — *measured_by*
  > To compute attack success rate, we use three LLM-as-a-judge models that are fine-tuned to assess output safety: ... the Llama-Guard-2 safety classifier... (Section 5)
  - [Robust LLM safeguarding via refusal feature adversarial training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1022661f3f43406065641f16ce25eafa-Paper-Conference.pdf)
- **StrongREJECT** (measurements) — *measured_by*
  > To compute attack success rate, we use three LLM-as-a-judge models that are fine-tuned to assess output safety: ... and the Gemma-2B version of the StrongReject safety classifier (Souly et al., 2024). (Section 5)
  - [Robust LLM safeguarding via refusal feature adversarial training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1022661f3f43406065641f16ce25eafa-Paper-Conference.pdf)
- **HEx-PHI** (measurements) — *measured_by*
  > HEx-PHI and SORRY-bench are two dedicated benchmarks for evaluating harmfulness in the HarmfulQA context. (Section 2.2)
  - [On Evaluating the Durability of Safeguards for Open-Weight LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/9d3a4cdf6f70559e8c6fe02170fba568-Paper-Conference.pdf)
- **SORRY-Bench** (measurements) — *measured_by*
  > HEx-PHI and SORRY-bench are two dedicated benchmarks for evaluating harmfulness in the HarmfulQA context. (Section 2.2)
  - [On Evaluating the Durability of Safeguards for Open-Weight LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/9d3a4cdf6f70559e8c6fe02170fba568-Paper-Conference.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > We determine the Attack Success Rate (ASR) by manually evaluating the responses generated by the target LLMs for each attack method, based on the evaluation criteria outlined in Appendix C. The ASR indicates the proportion of harmful responses generated. (Section 4.1)
  - [Refuse Whenever You Feel Unsafe: Improving Safety in LLMs via Decoupled Refusal Training](https://aclanthology.org/2025.acl-long.158.pdf)
- **Llama Guard** (measurements) — *measured_by*
  > To evaluate the VLM output harmfulness, we use the Attack Success Rate (ASR) metric via Llama Guard (Inan et al., 2023), following prior works (Zou et al., 2023; Shayegani et al., 2024; Luo et al., 2024). (Section 4.1)
  - [Layer-wise Alignment: Examining Safety Alignment Across Image Encoder Layers in Vision Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bachu25a/bachu25a.pdf)
- **MM-SafetyBench** (measurements) — *measured_by*
  > MM-SafetyBench (Liu et al., 2024b), originally proposed as QR Attack, uses image-query-related inputs to elicit harmful responses from models. (Section 4.1)
  - [Visual Contextual Attack: Jailbreaking MLLMs with Image-Driven Context Injection](https://aclanthology.org/2025.emnlp-main.487.pdf)
- **Representational harm** (constructs) — *causes*
  > The former occur when PLMs propagate stereotypes, toxic language, and disparate judgments that depict one social group more unfavorably than another (Blodgett et al., 2020; Crawford, 2017)
  - [Social Bias in Multilingual Language Models: A Survey](https://aclanthology.org/2025.emnlp-main.1416.pdf)

### → Harmful content generation
- **Jailbreaking** (behaviors tasks) — *causes*
  > We focus on identifying prompts that, when given a specific harmful request (e.g., “Tell me how to build a bomb”), induces the LLM to generate harmful content.
  - [Jailbreaking Leading Safety-Aligned LLMs with Simple Adaptive Attacks](https://proceedings.iclr.cc/paper_files/paper/2025/file/63fa7efdd3bcf944a4bd6e0ff6a50041-Paper-Conference.pdf)
- **Safety alignment** (constructs) — *causes*
  > “Safety alignment is essential to prevent unintended model behaviors and mitigate risks in downstream applications.”
  - [Durable Quantization Conditioned Misalignment Attack on Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/376b1b131609e764f687afca832e62b3-Paper-Conference.pdf)
- **Safety robustness** (constructs) — *causes*
  > jailbreak attacks, which exploit vulnerabilities to elicit unintended or harmful outputs, threaten LLMs safety significantly. (Abstract)
  - [Layer-Level Self-Exposure and Patch: Affirmative Token Mitigation for Jailbreak Attack Defense](https://aclanthology.org/2025.naacl-long.623.pdf)
- **Instruction following** (behaviors tasks) — *causes*
  > GPT-4 showed notably more unsafe behavior than Turbo in almost all cases when chatting with ciphers, due to its superior instruction understanding and adherence, thereby interpreting the cipher instruction and generating a relevant response. (Section 4.3)
  - [GPT-4 Is Too Smart To Be Safe: Stealthy Chat with LLMs via Cipher](https://proceedings.iclr.cc/paper_files/paper/2024/file/ed4c38fe7899d3653acf39b2102af8ba-Paper-Conference.pdf)
- **User modeling** (constructs) — *causes*
  > In this work, we show that whether they do so [divulge harmful information] depends signiﬁcantly on who they are talking to, which we refer to as user persona.
  - [Who's asking? User personas and the mechanics of latent misalignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/e40d5118ee8f837729fa877add71c38f-Paper-Conference.pdf)
- **Intent understanding** (constructs) — *causes*
  > By incorporating adversarial sequences, these attacks can redirect the source LLM’s focus away from malicious-intent tokens in the original input, thereby obstructing the model’s intent recognition and eliciting harmful responses. (Abstract)
  - [Understanding and Enhancing the Transferability of Jailbreaking Attacks](https://proceedings.iclr.cc/paper_files/paper/2025/file/db988b089d8d97d0f159c15ed0be6a71-Paper-Conference.pdf)
- **Harmlessness** (constructs) — *causes*
  > Taking the concept of harmfulness as an example, L-Cross Modulation effectively steer LLMs to generate harmful content in 90% of outputs on test set, compared with 0% harmful content in the original responses;
  - [Cross-model Transferability among Large Language Models on the Platonic Representations of Concepts](https://aclanthology.org/2025.acl-long.185.pdf)

### Associated with
- **Safety** (constructs)
  > Here, safety is defined as stopping models from following malicious instructions and generating toxic content. (Section 3)
  - [Safety-Tuned LLaMAs: Lessons From Improving the Safety of Large Language Models that Follow Instructions](https://proceedings.iclr.cc/paper_files/paper/2024/file/9178ece87f0a5d6558f49f43ec1e8a1a-Paper-Conference.pdf)
- **Social bias** (constructs)
  > social attributes such as perceived race, gender, and physical characteristics depicted in images can significantly influence the generation of toxic content (Abstract).
  - [Uncovering Bias in Large Vision-Language Models at Scale with Counterfactuals](https://aclanthology.org/2025.naacl-long.305.pdf)
