class ApplicationController < ActionController::API
    include Knock::Authenticable

    def encode_token(payload)
        JWT.encode(payload, 'my_secret')
    end
end
